// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Redux
import { selectCollectionsForPreview } from '../../store/selectors/shop';

// Components
import { CollectionPreview } from '../CollectionPreview';

const CollectionsOverviewFn = ({ collections }) => (
  <div className="collections-overview">
    {
      collections.map(({
        id, title, routeName, items
      }) => (
        <CollectionPreview key={id} title={title} routeName={routeName} items={items} />
      ))
    }
  </div>
);

CollectionsOverviewFn.propTypes = {
  collections: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export const CollectionsOverview = connect(mapStateToProps)(CollectionsOverviewFn);
