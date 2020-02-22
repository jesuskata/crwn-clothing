// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Firebase
import { auth } from '../../firebase/firebaseUtils';

// Components
import { CartIconConnected } from '../CartIcon';
import { CartDropdownConnected } from '../CartDropdown';

// Redux
import { selectCartHidden } from '../../store/selectors/cart';
import { selectCurrentUser } from '../../store/selectors/user';

// Styles
import './styles.scss';

// Assets
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">SHOP</Link>
      <Link className="option" to="/contact">CONTACT</Link>
      {
        currentUser ? (
          <Link className="option" onClick={() => auth.signOut()} to="/">SIGN OUT</Link>
        ) : (
          <Link className="option" to="/signin">SIGN IN</Link>
        )
      }
      <CartIconConnected />
    </div>
    {hidden ? (
      null
    ) : (
      <CartDropdownConnected hidden={hidden} />
    )}
  </div>
);

Header.propTypes = {
  currentUser: PropTypes.objectOf(PropTypes.any),
  hidden: PropTypes.bool
};

const mapStateToProps = createStructuredSelector({ // NOTE! The state value is the rootReducer
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

// This is another way to do the same from above
// eslint-disable-next-line max-len
// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({ // NOTE! The state value is the rootReducer
//   currentUser,
//   hidden
// });

export const HeaderConnected = connect(mapStateToProps)(Header);
