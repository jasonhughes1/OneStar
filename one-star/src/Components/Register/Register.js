import React, { Component } from 'react';
import css from './Register.css';

class Register extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  render() {
  return (
    <div className="Register-Container">
      <h3>REGISTER</h3>
      <input placeholder="name" />
      <input placeholder="email" />
      <input placeholder="password"/>
      <button>Submit</button>
    </div>
  )
}
}


export default Register;
