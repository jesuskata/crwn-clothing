// Dependencies
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// Redux
import { selectIsCollectionFetching } from '../../store/selectors/shop';

// Components
import { WithSpinner } from '../../components/WithSpinner';
import { CollectionsOverview } from '../../components/CollectionsOverview';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

export const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);
