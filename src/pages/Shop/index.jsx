/* eslint-disable react/state-in-constructor */
// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import { WithSpinner } from '../../components/WithSpinner';
import { CollectionOverview } from '../../components/CollectionsOverview';
import { CollectionPage } from '../CollectionPage';

// Redux Actions
import { updateCollections as updateCollectionsAction } from '../../store/actions/shopActions';

// Firebase
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebaseUtils';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  state = {
    loading: true
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    // fetch('https://firestore.googleapis.com/v1/projects/PROJECT_NAME/databases/(default)/documents/DOCUMENT_NAME')
    //   .then(response => response.json())
    //   .then(DOCUMENT_NAME => {
    //     console.log('DOCUMENT_NAME: ', DOCUMENT_NAME);
    //   });

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({
        loading: false
      });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />}
        />
      </div>
    );
  }
}

ShopPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any),
  updateCollections: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollectionsAction(collectionsMap))
});

export const ShopPageConnected = connect(null, mapDispatchToProps)(ShopPage);
