import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import firebase, { auth, provider } from '../firebase.js';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
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

  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.user !== this.props.user) {
  //     this.props.history.push('/')
  //   }
  // }
  render() {
    return (
      <div className='create-account'>
        <h1 className='register-title'>Don't have an account? Register here!</h1>
        <input className='inputs' placeholder="name" onChange={(event) => this.handleChange('name', event) }></input>
        <input className='inputs' placeholder="email" onChange={(event) => this.handleChange('email', event) }></input>
        <input className='inputs' placeholder="password" onChange={(event) => this.handleChange('password', event) }></input>
        <button className='register-button' onClick={ () => this.createNewUser()}>submit</button>
      </div>
    );
  }
}

Register.propTypes = {
  register: PropTypes.func
};

export default Register;
