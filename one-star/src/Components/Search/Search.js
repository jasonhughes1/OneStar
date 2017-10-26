import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'

const Search = () => {

  return (
    <header>

    <NavLink to='/search' className='search-link'> Quick Search! </NavLink>
    <h2>This is the search component</h2>
  </header>
  )
}


export default Search;
