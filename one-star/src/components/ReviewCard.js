import React from 'react';
import PropTypes from 'prop-types';

const ReviewCard = (props) => {
  console.log("propzzzzzz ", props.review);
  return (
    <div className='review-card'>
      <h3 className='text'>{props.review.name}</h3>
      <h3 className='location'>Street Address: {props.review.location.address1}</h3>
      <p className='city'>City: {props.review.location.city}</p>
      <p className='state'>State: {props.review.location.state}</p>
      <p className='rating'>Average Rating:{props.review.rating}</p>
      {/* <img className="movie-image" src={`https://image.tmdb.org/t/p/w500${poster_path}`} /> */}
      <div className='image-container'>
      <img className='card-image' src={`https://s3-media3.fl.yelpcdn.com/bphoto/FdtyXLeNvBPKDlkXCCMPSQ/o.jpg`} />
      <button className='reviews-button'>Get Reviews</button>
    </div>
    </div>
  );
};

ReviewCard.propTypes = {
};

export default ReviewCard;
