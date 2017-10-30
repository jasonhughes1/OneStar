import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Homepage extends Component<HomepageState, Props> {
  constructor() {
    super();
    this.state = {
      searchValue: ''
    };
  }

  handleChange(event) {
    this.setState({
      searchValue: event.target.value
    });
  }

  render() {
    return (
      <div className='homepage'>
        <h1 className='homepage-title'>Homepage & Search Here</h1>
        <input className='search-input' placeholder='Search' onChange= {(event ) => this.handleChange(event)}></input>
        <Link to='/searchresults'>
        <button className='search-button' onClick={ () => this.props.searchReviews() }>Go</button>
        </Link>
      </div>
    );
  }
}

Homepage.propTypes = {
  searchReviews: PropTypes.func
};

export default Homepage;
