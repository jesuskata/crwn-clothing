// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
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
// import './styles.scss';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './styles';

// Assets
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {
        currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()} to="/">SIGN OUT</OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )
      }
      <CartIconConnected />
    </OptionsContainer>
    {hidden ? (
      null
    ) : (
      <CartDropdownConnected hidden={hidden} />
    )}
  </HeaderContainer>
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
