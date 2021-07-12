import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {
  handleClick = () => {
    this.props.deleteRestaurant(this.props.restaurant.id)
  }

  render() {
    // console.log("props",this.props)
    const { restaurant , deleteRestaurant} = this.props;

    // console.log("rest component", restaurant)
 
    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => this.handleClick()}> X </button>
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
