import { connect } from 'react-redux';
import SearchResults from '../components/SearchResults';
import { searchReviews } from '../actions/actions.js';


const mapStateToProps = store => ({
  searchResults: store.searchResults
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
