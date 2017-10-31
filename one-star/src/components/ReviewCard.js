import React from 'react';
import PropTypes from 'prop-types';

const ReviewCard = (props) => {
  console.log("props",props);
  return (
    <div className='review-card'>
      { props.review.text }
      { props.review.rating }

    </div>
  );
};

ReviewCard.propTypes = {
};

export default ReviewCard;
