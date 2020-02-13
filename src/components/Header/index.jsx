/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Firebase
import { auth } from '../../firebase/firebaseUtils';

// Styles
import './styles.scss';

// Assets
import { ReactComponent as Logo } from '../../assets/crown.svg';

export const Header = ({ currentUser }) => (
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
    </div>
  </div>
);

Header.propTypes = {
  currentUser: PropTypes.objectOf(PropTypes.any)
};
