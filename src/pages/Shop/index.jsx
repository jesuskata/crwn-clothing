// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Redux
import { selectCollections } from '../../store/selectors/shop';

// Components
import { CollectionPreview } from '../../components/CollectionPreview';

const ShopPageFn = ({ collections }) => (
  <div className="shop-page">
    {
      collections.map(({
        id, title, routeName, items
      }) => (
        <CollectionPreview key={id} title={title} routeName={routeName} items={items} />
      ))
    }
  </div>
);

ShopPageFn.propTypes = {
  collections: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export const ShopPage = connect(mapStateToProps)(ShopPageFn);
