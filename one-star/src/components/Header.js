import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

const Header = (props) => {
  const { logout } = props
  return (
    <div className='header'>
      <h1 className='one-star'>ONE STAR<span>
        <img className='star-image' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Full_Star_Yellow.svg/2000px-Full_Star_Yellow.svg.png"></img></span></h1>
      <div className='link-container'>
      <NavLink to='/login' className='nav'>Login Here</NavLink>
      <NavLink to='/register' className='nav'>Click To Register</NavLink>
      <NavLink to='/' className='nav'>Homepage</NavLink>
    </div>
    {/* {!props.user &&
      <div>
        <h3>login or search to continue</h3>
      </div>
    }
    {
      props.user &&
        <div className="logged-in-user">
          <h3 className="welcome-user">Hello,
            <span>{props.user}</span></h3>
        </div>
    } */}
    </div>
  );
};

export default Header;
