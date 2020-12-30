// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

import { SpinnerContainer, SpinnerOverlay } from './styles';

export const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => (
    isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    )
  );
  Spinner.propTypes = {
    isLoading: PropTypes.bool
  };

  return Spinner;
};
