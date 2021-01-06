// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Spinner as SpinnerComponent } from '../Spinner';

export const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => (
    isLoading ? (
      <SpinnerComponent />
    ) : (
      <WrappedComponent {...otherProps} />
    )
  );
  Spinner.propTypes = {
    isLoading: PropTypes.bool
  };

  return Spinner;
};
