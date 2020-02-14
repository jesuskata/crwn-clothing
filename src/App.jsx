// Dependencies
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Styles
import './App.css';

// Components
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/Shop';
import { SigninAndSignup } from './pages/SigninAndSignup';
import { Header } from './components/Header';

// Firebase
import { auth, createUserProfileDocument } from './firebase/firebaseUtils';

// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// );

class App extends React.Component {
  // Unsubscribe
  unsubscribeFromAuth = null;

  constructor() {
    super();

    this.state = {
      currentUser: null // eslint-disable-line
    };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log('state: ', this.state); // eslint-disable-line
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/contact" component={ShopPage} />
          <Route path="/signin" component={SigninAndSignup} />
        </Switch>
      </div>
    );
  }
}

export default App;
