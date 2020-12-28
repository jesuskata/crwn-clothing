/* eslint-disable react/state-in-constructor */
// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

// Components
import { WithSpinner } from '../../components/WithSpinner';
import { CollectionOverview } from '../../components/CollectionsOverview';
import { CollectionPage } from '../CollectionPage';

// Redux Actions
import { fetchCollectionsStartAsync as fetchCollectionsStartAsyncAction } from '../../store/actions/shopActions';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../store/selectors/shop';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
    // fetch('https://firestore.googleapis.com/v1/projects/PROJECT_NAME/databases/(default)/documents/DOCUMENT_NAME')
    //   .then(response => response.json())
    //   .then(DOCUMENT_NAME => {
    //     console.log('DOCUMENT_NAME: ', DOCUMENT_NAME);
    //   });
  }

  render() {
    const { match, isCollectionFetching, isCollectionsLoaded } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />}
        />
      </div>
    );
  }
}

ShopPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any),
  updateCollections: PropTypes.func,
  fetchCollectionsStartAsync: PropTypes.func,
  isCollectionFetching: PropTypes.bool,
  isCollectionsLoaded: PropTypes.bool
};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsyncAction())
});

export const ShopPageConnected = connect(mapStateToProps, mapDispatchToProps)(ShopPage);
