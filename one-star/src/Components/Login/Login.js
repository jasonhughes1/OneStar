import React, { Component } from 'react'

class Login extends Component {
  constructor () {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

render() {
  return (
    <div>
      <h3>LOGIN</h3>
      <input placeholder="email" />
      <input placeholder="password"/>
      <button>Submit</button>
    </div>
    )
  }
}

export default Login;
