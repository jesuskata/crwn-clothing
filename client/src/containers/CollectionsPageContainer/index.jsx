// Dependencies
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// Redux
import { selectIsCollectionsLoaded } from '../../store/selectors/shop';

// Components
import { WithSpinner } from '../../components/WithSpinner';
import { CollectionPage } from '../../pages/CollectionPage';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

export const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);
