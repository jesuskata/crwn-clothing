// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import { CollectionOverview } from '../../components/CollectionsOverview';
import { CollectionPage } from '../CollectionPage';

// Redux Actions
import { updateCollections as updateCollectionsAction } from '../../store/actions/shopActions';

// Firebase
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebaseUtils';

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
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
  match: PropTypes.objectOf(PropTypes.any),
  updateCollections: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollectionsAction(collectionsMap))
});

export const ShopPageConnected = connect(null, mapDispatchToProps)(ShopPage);
