// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Redux
import { setCurrentUser as setCurrentUserAction } from './store/actions/userActions';
import { selectCurrentUser } from './store/selectors/user';

// Styles
import './App.css';

// Components
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/Shop';
import { SigninAndSignup } from './pages/SigninAndSignup';
import { HeaderConnected } from './components/Header';

// Firebase
import { auth, createUserProfileDocument } from './firebase/firebaseUtils';

class App extends React.Component {
  // Unsubscribe
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
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
          <Route path="/shop" component={ShopPage} />
          <Route path="/contact" component={ShopPage} />
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
  setCurrentUser: PropTypes.func,
  currentUser: PropTypes.objectOf(PropTypes.any)
};

const mapStateToProps = createStructuredSelector({ // We are destructuring the user reducer from state (rootReducer)
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUserAction(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
