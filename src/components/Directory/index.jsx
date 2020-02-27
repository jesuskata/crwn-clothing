// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Redux
import { selectDirectorySection } from '../../store/selectors/directory';

// Components
import { MenuItemWithRouter } from '../MenuItem';

// Styles
import './Directory.scss';

const DirectoryFn = ({ sections }) => (
  <div className="directory-menu">
    {
      sections.map(({
        title, imageUrl, id, size, linkUrl
      }) => (
        <MenuItemWithRouter
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
          linkUrl={linkUrl}
        />
      )
      )
    }
  </div>
);

DirectoryFn.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
});

export const Directory = connect(mapStateToProps)(DirectoryFn);
