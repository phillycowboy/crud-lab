import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {


  render() {
    const { restaurant } = this.props;
    console.log("rest component", restaurant)
    return (
      <div>
        <li>
          {restaurant}
          <button> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;

// return (<Restaurant 
//   key={restaurant.id}
//   restuarant={restaurant} 
  // deleteRestaurant={deleteRestaurant}
