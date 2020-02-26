/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Redux
import { clearItemFromCart } from '../../store/actions/cartActions';

// Styles
import './styles.scss';

const CheckoutItemFn = ({ cartItem, clearItem }) => {
  const {
    name, imageUrl, price, quantity
  } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</span>
    </div>
  );
};

CheckoutItemFn.propTypes = {
  cartItem: PropTypes.objectOf(PropTypes.any),
  clearItem: PropTypes.func
};

// This is another way to do the dispatch
const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item))
});

export const CheckoutItem = connect(null, mapDispatchToProps)(CheckoutItemFn);
