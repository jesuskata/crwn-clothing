// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import { CustomButton } from '../CustomButton';
import { CartItem } from '../CartItem';

// Styles
import './styles.scss';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
      }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

CartDropdown.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.any)
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export const CartDropdownConnected = connect(mapStateToProps)(CartDropdown);
