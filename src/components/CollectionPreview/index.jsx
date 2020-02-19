// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { CollectionItemConnected } from '../CollectionItem';

// Styles
import './styles.scss';

export const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {
        items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItemConnected key={item.id} item={item} />
          ))
      }
    </div>
  </div>
);

CollectionPreview.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.any)
};
