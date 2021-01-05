/* eslint-disable react/state-in-constructor */
// Dependencies
import React, { useEffect, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Redux Actions
import { fetchCollectionsStart as fetchCollectionsStartAction } from '../../store/actions/shopActions';

// Components
import { Spinner } from '../../components/Spinner';

// Lazy Components
const CollectionsOverviewContainer = lazy(() => import('../../containers/CollectionsOverviewContainer'));
const CollectionPageContainer = lazy(() => import('../../containers/CollectionsPageContainer'));

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
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

export default connect(null, mapDispatchToProps)(ShopPage);
