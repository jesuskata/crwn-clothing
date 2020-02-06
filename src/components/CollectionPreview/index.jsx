// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { CollectionItem } from '../CollectionItem';

// Styles
import './styles.scss';

export const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {
        items
          .filter((item, idx) => idx < 4)
          .map(({
            id, name, price, imageUrl
          }) => (
            <CollectionItem key={id} name={name} price={price} imageUrl={imageUrl} />
          ))
      }
    </div>
  </div>
);

CollectionPreview.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.any)
};
