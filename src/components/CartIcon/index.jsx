/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Redux
import { toggleCartHidden as toggleCartHiddenAction } from '../../store/actions/cartActions';
import { selectCartItemsCount } from '../../store/selectors/cart';

// Styles
import './styles.scss';

// Assets
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

export const CartIcon = ({ toggleCartHidden, cartItems }) => (
  <div role="button" className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{cartItems}</span>
  </div>
);

CartIcon.propTypes = {
  toggleCartHidden: PropTypes.func,
  cartItems: PropTypes.number
};

const mapStateToProps = state => ({
  // This next line represent a Redux Selector
  cartItems: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHiddenAction())
});

export const CartIconConnected = connect(mapStateToProps, mapDispatchToProps)(CartIcon);
