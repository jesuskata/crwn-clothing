/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

// Styles
import './MenuItem.scss';

const MenuItem = ({
  title, imageUrl, size, history, linkUrl, match
}) => (
  <div
    role="button"
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
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
  size: PropTypes.string,
  history: PropTypes.objectOf(PropTypes.any),
  match: PropTypes.objectOf(PropTypes.any),
  linkUrl: PropTypes.string
};

export const MenuItemWithRouter = withRouter(MenuItem);
