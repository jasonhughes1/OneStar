import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReviewCard from './ReviewCard.js'

const SearchResults = ({ searchResults }) => {

  return (
    <div className='search-results'>
        {searchResults.length ? searchResults.map(review => <ReviewCard review={review} key={review.id}/>) : <div>"no review here"</div>}
    </div>
  );
};

SearchResults.propTypes = {
  searchResults: PropTypes.array
};

export default SearchResults;
