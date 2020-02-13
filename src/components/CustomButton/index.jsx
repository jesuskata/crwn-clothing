// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './styles.scss';

export const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  // eslint-disable-next-line react/button-has-type
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.any, // eslint-disable-line
  isGoogleSignIn: PropTypes.bool
};
