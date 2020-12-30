// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './styles.scss';

export const CartItem = ({
  item: {
    imageUrl, price, name, quantity
  }
}) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {`${quantity} x $${price}`}
      </span>
    </div>
  </div>
);

CartItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.any),
};
