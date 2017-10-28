import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <h1 className='one-star'>ONE STAR</h1>
      <div className='link-container'>
      <NavLink to='/login' className='nav'>Login Here</NavLink>
      <NavLink to='/register' className='nav'>Click To Register</NavLink>
      <NavLink to='/' className='nav'>Homepage</NavLink>
    </div>
    </div>
  );
};

export default Header;
