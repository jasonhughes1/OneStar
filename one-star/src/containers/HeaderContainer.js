import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = (store) => ({
  user: store.user,
});

// const mapDispatchToProps = dispatch => {
//
// };

export default connect(mapStateToProps, null)(Header);
