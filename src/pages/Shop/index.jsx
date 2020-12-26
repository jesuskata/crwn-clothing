// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

// Components
import { CollectionOverview } from '../../components/CollectionsOverview';
import { CollectionPage } from '../CollectionPage';

// Firebase
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebaseUtils';

export class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshot => {
      convertCollectionsSnapshotToMap(snapshot);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    );
  }
}

ShopPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any)
};
