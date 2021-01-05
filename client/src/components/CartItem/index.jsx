// Dependencies
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Styles
import './styles.scss';

const CartItemFn = ({
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

CartItemFn.propTypes = {
  item: PropTypes.objectOf(PropTypes.any),
};

export const CartItem = memo(CartItemFn);
