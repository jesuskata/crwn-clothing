/* eslint-disable react/state-in-constructor */
// Dependencies
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Containers
import { CollectionsOverviewContainer } from '../../containers/CollectionsOverviewContainer';
import { CollectionPageContainer } from '../../containers/CollectionsPageContainer';

// Redux Actions
import { fetchCollectionsStart as fetchCollectionsStartAction } from '../../store/actions/shopActions';

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

ShopPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any),
  fetchCollectionsStart: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStartAction())
});

export const ShopPageConnected = connect(null, mapDispatchToProps)(ShopPage);
