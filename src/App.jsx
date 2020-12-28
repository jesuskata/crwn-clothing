// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Redux Selectors
import { selectCurrentUser } from './store/selectors/user';

// Styles
import './App.module.css';

// Components
import { HomePage } from './pages/HomePage';
import { ShopPageConnected } from './pages/Shop';
import { Checkout } from './pages/Checkout';
import { SigninAndSignup } from './pages/SigninAndSignup';
import { HeaderConnected } from './components/Header';

class App extends React.Component {
  // Unsubscribe
  unsubscribeFromAuth = null;

  componentDidMount() {
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);

    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data()
    //       });
    //     });
    //   }
    //   setCurrentUser(userAuth);
    //   // addCollectionAndDocuments('collections', collectionsArray.map(({ title, items }) => (
    //   //   { title, items }
    //   // )));
    // });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <HeaderConnected />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPageConnected} />
          <Route path="/contact" component={ShopPageConnected} />
          <Route path="/checkout" component={Checkout} />
          <Route
            exact
            path="/signin"
            render={() => (currentUser
              ? (
                <Redirect to="/" />
              ) : (
                <SigninAndSignup />
              ))}
          />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  currentUser: PropTypes.objectOf(PropTypes.any)
};

const mapStateToProps = createStructuredSelector({ // We are destructuring the user reducer from state (rootReducer)
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
