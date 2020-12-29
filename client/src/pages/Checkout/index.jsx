/* eslint-disable react/jsx-one-expression-per-line */
// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Component
import { CheckoutItem } from '../../components/CheckoutItem';
import { StripeCheckoutButton } from '../../components/StripeButton';

// Redux
import { selectCartItems, selectCartTotal } from '../../store/selectors/cart';

// Styles
import styles from './styles.module.scss';

const CheckoutComponent = ({ cartItems, total }) => (
  <div className={styles.checkoutPage}>
    <div className={styles.checkoutHeader}>
      <div className={styles.headerBlock}>
        <span>Product</span>
      </div>
      <div className={styles.headerBlock}>
        <span>Description</span>
      </div>
      <div className={styles.headerBlock}>
        <span>Quantity</span>
      </div>
      <div className={styles.headerBlock}>
        <span>Price</span>
      </div>
      <div className={styles.headerBlock}>
        <span>Remove</span>
      </div>
    </div>
    {
      cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))
    }
    <div className={styles.total}>
      <span>
        TOTAL: ${total}
      </span>
    </div>
    <div className={styles.testWarning}>
      *Please use the following test credit card for payment
      <br />
      4242 4242 4242 4242 - Exp: Any future date - CVC: Any 3 digits
    </div>
    <StripeCheckoutButton price={total} />
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
