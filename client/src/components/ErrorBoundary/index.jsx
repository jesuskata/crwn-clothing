/* eslint-disable react/state-in-constructor */
// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styled Components
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './styles';

export class ErrorBoundary extends Component {
  state = {
    hasErrored: false
  }

  static getDerivedStateFromError(error) {
    // process error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    // console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/yW2W9SC.png" />
          <ErrorImageText>Sorry, this page is broken</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.any // eslint-disable-line
};
