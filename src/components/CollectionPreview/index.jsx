/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useRouteMatch } from 'react-router-dom';

// Components
import { CollectionItem } from '../CollectionItem';

// Styles
import './styles.scss';

export const CollectionPreview = ({
  title, items, routeName
}) => {
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <div className="collection-preview">
      <h1
        onClick={() => history.push(`${match.path}/${routeName}`)}
        className="title"
      >
        {title.toUpperCase()}
      </h1>
      <div className="preview">
        {
          items
            .filter((item, idx) => idx < 4)
            .map(item => (
              <CollectionItem key={item.id} item={item} />
            ))
        }
      </div>
    </div>
  );
};

CollectionPreview.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.any),
  routeName: PropTypes.string
};
