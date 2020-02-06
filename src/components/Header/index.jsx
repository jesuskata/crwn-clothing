// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './styles.scss';

// Assets
import { ReactComponent as Logo } from '../../assets/crown.svg';

export const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">SHOP</Link>
      <Link className="option" to="/contact">CONTACT</Link>
      <Link className="option" to="/signin">SIGN IN</Link>
    </div>
  </div>
);
