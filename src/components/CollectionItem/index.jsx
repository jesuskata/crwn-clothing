// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import { CustomButton } from '../CustomButton';

// Redux Actions
import { addItem as addItemAction } from '../../store/actions/cartActions';

// Styles
import './styles.scss';

const CollectionItem = ({
  item, addItem
}) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{ name }</span>
        <span className="price">{ `$${price}` }</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted> Add to cart </CustomButton>
    </div>
  );
};

CollectionItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.any),
  addItem: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItemAction(item))
});

export const CollectionItemConnected = connect(null, mapDispatchToProps)(CollectionItem);
