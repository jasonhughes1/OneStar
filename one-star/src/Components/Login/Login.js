import React, { Component } from 'react'
import firebase from './../../firebase';
import css from './Login.css';


class Login extends Component {
  constructor () {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

signIn() {
  let email = this.state.email;
  let password = this.state.password;
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(response => console.log(Promise.resolve(response)))
  .catch(err => alert('Email and Password not valid'))
  }



updateState(key, value) {
  console.log(key, value);
  this.setState({
    [key]: value
  })
}

render() {
  return (
    <div className="login-container">
      <h3>LOGIN</h3>
      <input onChange={(e) => this.updateState('email', e.target.value)} placeholder="email" />
      <input onChange={(e) => this.updateState('password', e.target.value)} placeholder="password"/>
      <button onClick={() => this.signIn()}>Submit</button>
    </div>
    )
  }
}

export default Login;
