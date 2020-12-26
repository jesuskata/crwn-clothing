// Dependencies
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Runtime configuration
// import runtimeEnv from '@mars/heroku-js-runtime-env';

// const env = runtimeEnv();

// const config = {
//   apiKey: env.REACT_APP_FB_API_KEY,
//   authDomain: env.REACT_APP_FB_AUTH_DOMAIN,
//   databaseURL: env.REACT_APP_FB_DBURL,
//   projectId: env.REACT_APP_FB_PROJECT_ID,
//   storageBucket: env.REACT_APP_FB_STORAGE_BUCKET,
//   messagingSenderId: env.REACT_APP_FB_MESSAGING_SENDER,
//   appId: env.REACT_APP_FB_APP_ID,
//   measurementId: env.REACT_APP_FB_MEASUREMENT_ID
// };

const config = {
  apiKey: 'AIzaSyDFocrq7lknDQkNQ_OsEE5kKEVq6-hAQIs',
  authDomain: 'crwn-db-c3aac.firebaseapp.com',
  databaseURL: 'https://crwn-db-c3aac.firebaseio.com',
  projectId: 'crwn-db-c3aac',
  storageBucket: 'crwn-db-c3aac.appspot.com',
  messagingSenderId: '453944246464',
  appId: '1:453944246464:web:c0b54e1f1e8abb5ba32d25',
  measurementId: 'G-643CT4RT8K'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('An error occurred creating user: ', error.message); // eslint-disable-line
    }
  }

  // eslint-disable-next-line consistent-return
  return userRef;
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  console.log('transformCollection: ', transformCollection); // eslint-disable-line
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  await batch.commit();
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
