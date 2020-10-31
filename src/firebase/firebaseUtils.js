// Dependencies
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Runtime configuration
import runtimeEnv from '@mars/heroku-js-runtime-env';

const env = runtimeEnv();

const config = {
  apiKey: env.REACT_APP_FB_API_KEY,
  authDomain: env.REACT_APP_FB_AUTH_DOMAIN,
  databaseURL: env.REACT_APP_FB_DBURL,
  projectId: env.REACT_APP_FB_PROJECT_ID,
  storageBucket: env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: env.REACT_APP_FB_MESSAGING_SENDER,
  appId: env.REACT_APP_FB_APP_ID,
  measurementId: env.REACT_APP_FB_MEASUREMENT_ID
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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
