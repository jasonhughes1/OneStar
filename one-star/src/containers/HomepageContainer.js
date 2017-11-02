import { connect } from 'react-redux';
import Homepage from '../components/Homepage';
import { searchReviews } from '../actions/actions.js';


const mapStateToProps = store => ({

});

const mapDispatchToProps = dispatch => ({
  searchAll: (searchResults, location) => {
    dispatch(searchReviews(searchResults, location))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
