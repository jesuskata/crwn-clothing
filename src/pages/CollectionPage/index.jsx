// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Redux
import { selectCollection } from '../../store/selectors/shop';

// Components
import { CollectionItem } from '../../components/CollectionItem'; // eslint-disable-line

// Styles
import './styles.scss';

export const CollectionPageFn = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">
        {`${title.toUpperCase()} PAGE`}
      </h2>
      <div className="items">
        {
          items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  );
};

CollectionPageFn.propTypes = {
  collection: PropTypes.objectOf(PropTypes.any)
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export const CollectionPage = connect(mapStateToProps)(CollectionPageFn);
