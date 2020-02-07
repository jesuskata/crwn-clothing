// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './styles.scss';

export const FormInput = ({
  label, handleChange, ...otherProps
}) => (
  <div className="group">
    <input
      className="form-input"
      onChange={handleChange}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    />
    {
      label ? (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label
          className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}
        >
          {label}
        </label>
      ) : (
        null
      )
    }
  </div>
);

FormInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  handleChange: PropTypes.func,
  required: PropTypes.bool
};
