// Dependencies
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Redux Selectors
import { selectCurrentUser } from './store/selectors/user';

// Redux Actions
import { checkUserSession as checkUserSessionAction } from './store/actions/userActions';

// Styles
import { GlobalStyle } from './globalStyles';

// Components
import { HomePage } from './pages/HomePage';
import { ShopPageConnected } from './pages/Shop';
import { Checkout } from './pages/Checkout';
import { SigninAndSignup } from './pages/SigninAndSignup';
import { HeaderConnected } from './components/Header';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
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
};

App.propTypes = {
  currentUser: PropTypes.objectOf(PropTypes.any),
  checkUserSession: PropTypes.func
};

const mapStateToProps = createStructuredSelector({ // We are destructuring the user reducer from state (rootReducer)
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSessionAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
