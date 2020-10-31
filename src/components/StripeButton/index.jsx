// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';

// Runtime configuration
// import runtimeEnv from '@mars/heroku-js-runtime-env';

// const env = runtimeEnv();

export const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  // const publishableKey = env.REACT_APP_PUBLISHABLE_KEY;
  const publishableKey = 'pk_test_gNAOEmYQAA6akX2TjW66uOZQ00Tg7rUswv';

  const onToken = token => {
    console.log('token: ', token); // eslint-disable-line
    alert('Payment Successful!'); // eslint-disable-line
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

StripeCheckoutButton.propTypes = {
  price: PropTypes.number
};
