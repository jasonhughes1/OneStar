import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReviewCard from './ReviewCard.js'

const SearchResults = ({ searchResults }) => {

  return (
    <div className='search-results'>
      <h1>Results from Search</h1>
        {searchResults.length ? searchResults[0].reviews.map(review => <ReviewCard review={review} key={Date.now()}/>) : "no review here"}
    </div>
  );
};

SearchResults.propTypes = {
  searchResults: PropTypes.array
};

export default SearchResults;
