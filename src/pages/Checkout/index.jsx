/* eslint-disable react/jsx-one-expression-per-line */
// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Component
import { CheckoutItem } from '../../components/CheckoutItem';

// Redux
import { selectCartItems, selectCartTotal } from '../../store/selectors/cart';

// Styles
import './styles.scss';

const CheckoutComponent = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {
      cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))
    }
    <div className="total">
      <span>
        TOTAL: ${total}
      </span>
    </div>
  </div>
);

CheckoutComponent.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.any),
  total: PropTypes.number
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export const Checkout = connect(mapStateToProps)(CheckoutComponent);
