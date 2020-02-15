// Dependencies
import React from 'react';

// Components
import { CustomButton } from '../CustomButton';

// Styles
import './styles.scss';

export const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);
