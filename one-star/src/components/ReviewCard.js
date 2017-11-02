import React from 'react';
import PropTypes from 'prop-types';

const ReviewCard = (props) => {
  console.log("propzzzzzz ", props.review);
  return (
    <div className='review-card'>
      <h3 className='review-text'>{props.review.text}</h3>
      <p className='review-rating'>{props.review.rating}</p>
    </div>
  );
};

ReviewCard.propTypes = {
};

export default ReviewCard;
