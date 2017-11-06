import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

const Header = (props) => {
console.log('props in header:', props)
  const { logout } = props
  const showName = props.user ?
  <div>
    <h2 className="welcome-email">Welcome, {props.user}</h2>
    <Link to='/'> <h3 className='logout' onClick={props}>Logout</h3> </Link>
    <NavLink to='/' className='nav'>Homepage</NavLink>

  </div> :
  <div className='link-container'>
    <NavLink to='/login' className='nav'>Login Here</NavLink>
    <NavLink to='/register' className='nav'>Click To Register</NavLink>
    <NavLink to='/' className='nav'>Homepage</NavLink>
      </div>

  return (
    <div className='header'>
      <h1 className='one-star'>ONE STAR<span>
        <img className='star-image' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Full_Star_Yellow.svg/2000px-Full_Star_Yellow.svg.png"></img></span></h1>

    { showName }
  </div>
  );
};

export default Header;
