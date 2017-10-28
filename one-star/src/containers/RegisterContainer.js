import { connect } from 'react-redux';
import Register  from '../components/Register';
import { register } from '../actions/actions.js';

const mapStateToProps = store => ({

});

const mapDispatchToProps = dispatch => ({
  register: (email, password) => {
    dispatch(register(email, password));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
