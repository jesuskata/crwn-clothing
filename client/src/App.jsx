// Dependencies
import React, { useEffect, lazy, Suspense } from 'react';
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
import { HeaderConnected } from './components/Header';
import { Spinner } from './components/Spinner';

// Lazy Components
const HomePage = lazy(() => import('./pages/HomePage'));
const ShopPageConnected = lazy(() => import('./pages/Shop'));
const Checkout = lazy(() => import('./pages/Checkout'));
const SigninAndSignup = lazy(() => import('./pages/SigninAndSignup'));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Suspense fallback={<Spinner />}>
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
      </Suspense>
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
