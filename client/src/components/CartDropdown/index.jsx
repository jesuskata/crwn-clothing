// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

// Components
import { CustomButton } from '../CustomButton';
import { CartItem } from '../CartItem';

// Redux
import { toggleCartHidden as toggleCartHiddenAction } from '../../store/actions/cartActions';
import { selectCartItems } from '../../store/selectors/cart';

// Styles
import './styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.length === 0 ? (
          <span className="empty-message">Your cart item is empty</span>
        ) : (
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        )
      }
    </div>
    <CustomButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHiddenAction());
    }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

CartDropdown.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.any),
  history: PropTypes.objectOf(PropTypes.any),
  dispatch: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export const CartDropdownConnected = withRouter(connect(mapStateToProps)(CartDropdown));
