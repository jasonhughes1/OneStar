import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReviewCard from './ReviewCard.js'

const SearchResults = ({ searchResults }) => {

  const reviewResults = searchResults.filter( result => {
    return result.type === "review";
  });


  const reviewCards = reviewResults.map( review => {
    return <ReviewCard
      review={review}
      key={review.id}/>;
  });

  return (
    <div className='search-results'>
      <h1>Results from Search</h1>
      <div className='card-container'>
        {reviewCards}
      </div>
    </div>
  );
};


SearchResults.propTypes = {
  searchResults: PropTypes.array
};

export default SearchResults;
