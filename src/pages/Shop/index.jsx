// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

// Components
import { CollectionOverview } from '../../components/CollectionsOverview';
import { CollectionPage } from '../CollectionPage';

export const ShopPage = ({ match }) => {
  console.log('match: ', match); // eslint-disable-line
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

ShopPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any)
};
