import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.css'

const Header = () => {
  return (
    <div className='header-section'>
      <h1>ONE STAR</h1>
      <NavLink to='/login' className='nav'>Login</NavLink>
      <NavLink to='/register' className='nav'>Register</NavLink>
    </div>
  )
}

// Header.propTypes = {
//   currUser: PropTypes.object,
//   login: PropTypes.func,
//   logout: PropTypes.func
// }

export default Header
