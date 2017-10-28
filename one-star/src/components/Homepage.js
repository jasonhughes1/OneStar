import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class Homepage extends Component {
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

  searchClick() {
    const { searchAll } = this.props;
    searchAll(this.state.searchValue);
  }



  render() {
    return (
      <div className='homepage'>
        <h1>Homepage & Search Here</h1>
        <input placeholder="Search" onChange= {(event ) => this.handleChange(event)}></input>
        <Link to='/searchresults'>
          <button onClick={ () => this.searchClick() }>Go</button>
        </Link>
      </div>
    );

  }
}

Homepage.propTypes = {
  searchAll: PropTypes.func
};

export default Homepage;
