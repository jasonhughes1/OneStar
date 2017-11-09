import React, { Component } from 'react';
import PropTypes from 'prop-types';




class ReviewCard extends Component {
constructor(props) {
  super(props);
  this.state = {
    reviews: this.props
  };
}

getReview(id) {
  //call fetch method with params of id

  console.log(id);
}
//create fetch method that takes in an id

render() {
  return (
    <div className='review-card'>
      <h3 className='text'>{this.props.review.name}</h3>
      <h3 className='location'>Street Address: {this.props.review.location.address1}</h3>
      <p className='city'>City: {this.props.review.location.city}</p>
      <p className='state'>State: {this.props.review.location.state}</p>
      <p className='rating'>Average Rating:{this.props.review.rating}</p>
      {/* <img className="movie-image" src={`https://image.tmdb.org/t/p/w500${poster_path}`} /> */}
      <div className='image-container'>
      <img className='card-image' src={this.props.review.image_url} />
      <button className='reviews-button' onClick={() => this.getReview(this.props.review.id)}>Get Reviews</button>
    </div>
    </div>
    );
  };
}




ReviewCard.propTypes = {
};

export default ReviewCard;
