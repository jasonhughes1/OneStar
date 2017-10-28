import { connect } from 'react-redux';
import Homepage from '../components/Homepage';


const mapStateToProps = store => ({

});

const mapDispatchToProps = dispatch => ({
  searchAll: (searchValue) => {
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
