// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './styles.scss';

export const CustomButton = ({ children, ...otherProps }) => (
  // eslint-disable-next-line react/button-has-type
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.any // eslint-disable-line
};
