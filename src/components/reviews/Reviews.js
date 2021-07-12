import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const {reviews, restaurantId, deleteReview } = this.props
    console.log("reviews props", this.props)
    const associatedReviews = reviews.filter( review => review.restaurantId === restaurantId)
    const reviewList = associatedReviews.map((review, id) => {
      return <Review key={id} review={review} deleteReview={deleteReview}/>
    })
    return (
      <ul>
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;