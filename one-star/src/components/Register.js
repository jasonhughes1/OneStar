import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import firebase, { auth, provider } from '../firebase.js';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }


  handleChange(description, event){
    this.setState({
      [description]: event.target.value
    });
  }

  createNewUser() {
    const { register } = this.props;
    register(this.state.email, this.state.password);
  }


  render() {
    return (
      <div className='create-account'>
        <h1>Register Here!</h1>
        <input placeholder="email" onChange={(event) => this.handleChange('email', event) }></input>
        <input placeholder="password" onChange={(event) => this.handleChange('password', event) }></input>
        <button onClick={ () => this.createNewUser()}>submit</button>
      </div>
    );
  }
}

Register.propTypes = {
  register: PropTypes.func
};

export default Register;
