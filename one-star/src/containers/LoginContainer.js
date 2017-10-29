import { connect } from 'react-redux';
import Login from '../components/Login';
import { handleLogin } from '../actions/actions.js';

const mapStateToProps = (store) => ({
  user: store.user
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => {
    dispatch(handleLogin(email, password));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
