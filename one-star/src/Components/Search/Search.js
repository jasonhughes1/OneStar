import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './Search.css';

const Search = () => {

  return (
    <header>
    <h2>Search for Reviews!</h2>
    <input placeholder="Search" />
    <button className="search-button">Submit</button>
  </header>
  )
}


export default Search;
