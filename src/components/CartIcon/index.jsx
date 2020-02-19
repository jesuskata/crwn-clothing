/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Redux Actions
import { toggleCartHidden as toggleCartHiddenAction } from '../../store/actions/cartActions';

// Styles
import './styles.scss';

// Assets
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

export const CartIcon = ({ toggleCartHidden }) => (
  <div role="button" className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

CartIcon.propTypes = {
  toggleCartHidden: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHiddenAction())
});

export const CartIconConnected = connect(null, mapDispatchToProps)(CartIcon);
