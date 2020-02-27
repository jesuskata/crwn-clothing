// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Redux
import { selectCollection } from '../../store/selectors/shop';

// Components
import { CollectionItemConnected } from '../../components/CollectionItem'; // eslint-disable-line

// Styles
import './styles.scss';

export const CollectionPageFn = ({ collection }) => (
  <div className="collection">
    <h2>
      {`${collection.title.toUpperCase()} PAGE`}
    </h2>
  </div>
);

CollectionPageFn.propTypes = {
  collection: PropTypes.objectOf(PropTypes.any)
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export const CollectionPage = connect(mapStateToProps)(CollectionPageFn);
