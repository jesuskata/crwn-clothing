// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { CustomButtonContainer } from './styles';

export const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>
    {children}
  </CustomButtonContainer>
);

CustomButton.propTypes = {
  children: PropTypes.any, // eslint-disable-line
  props: PropTypes.any // eslint-disable-line
};
