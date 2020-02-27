// Dependencies
import React from 'react';

// Components
import { CollectionItemConnected } from '../../components/CollectionItem'; // eslint-disable-line

// Styles
import './styles.scss';

export const CollectionPage = ({ match }) => { // eslint-disable-line
  console.log('collection match: ', match); // eslint-disable-line
  return (
    <div className="collection">
      <h2>CATEGORY PAGE</h2>
    </div>
  );
};
