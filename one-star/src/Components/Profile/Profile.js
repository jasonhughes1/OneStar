import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'

const Profile = () => {

  return (
    <header>

    <NavLink to='/profile' className='search-link'> My Profile </NavLink>
    <h2>This is the profile component</h2>
  </header>
  )
}


export default Profile;
