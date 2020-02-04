// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './MenuItem.scss';

export const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

MenuItem.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  size: PropTypes.string
};
