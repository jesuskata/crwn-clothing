// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Components
import { CustomButton } from '../CustomButton';
import { CartItem } from '../CartItem';

// Redux
import { selectCartItems } from '../../store/selectors/cart';

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

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export const CartDropdownConnected = connect(mapStateToProps)(CartDropdown);
