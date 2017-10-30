import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
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

  userLogin() {
    const { login } = this.props;
    login(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className='login'>
        <h1 className='login-text'>Login Here</h1>
        <input className='inputs' placeholder="email" onChange={(event) => this.handleChange('email', event) }></input>
        <input className='inputs' placeholder="password" onChange={(event) => this.handleChange('password', event) }></input>
        <button className='login-button' onClick={ () => this.userLogin()}>submit</button>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func
};

export default Login;
