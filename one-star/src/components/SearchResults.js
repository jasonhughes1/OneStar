import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReviewCard from './ReviewCard.js'

const SearchResults = ({ searchResults }) => {

  // searchResults.forEach(review => {
  //   console.log('review in forEach ', review);
  // })

  return (
    <div className='search-results'>
      {/* <h1>Results from Search</h1> */}

        {/* {searchResults[0].reviews.length ? searchResults[0].reviews.map(review => <ReviewCard review={review} key={Date.now()}/>) : "no review here"} */}
        {searchResults.length ? searchResults.map(review => <ReviewCard review={review} key={review.time_created}/>) : <div>"no review here"</div>}
    </div>
  );
};

SearchResults.propTypes = {
  searchResults: PropTypes.array
};

export default SearchResults;
