import { connect } from 'react-redux';
import Homepage from '../components/Homepage';
import { searchReviews } from '../actions/actions.js';


const mapStateToProps = store => ({

});

const mapDispatchToProps = dispatch => ({
  searchReviews: searchReviews
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
