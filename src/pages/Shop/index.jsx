/* eslint-disable react/state-in-constructor */
// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Containers
import { CollectionsOverviewContainer } from '../../containers/CollectionsOverviewContainer';
import { CollectionPageContainer } from '../../containers/CollectionsPageContainer';

// Redux Actions
import { fetchCollectionsStart as fetchCollectionsStartAction } from '../../store/actions/shopActions';

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
    // fetch('https://firestore.googleapis.com/v1/projects/PROJECT_NAME/databases/(default)/documents/DOCUMENT_NAME')
    //   .then(response => response.json())
    //   .then(DOCUMENT_NAME => {
    //     console.log('DOCUMENT_NAME: ', DOCUMENT_NAME);
    //   });
  }

  render() {
    const { match } = this.props;
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
  }
}

ShopPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any),
  fetchCollectionsStart: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStartAction())
});

export const ShopPageConnected = connect(null, mapDispatchToProps)(ShopPage);
