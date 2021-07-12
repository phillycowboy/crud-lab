import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {
  handleClick = () => {
    this.props.deleteRestaurant(this.props.restuarant.id)
  }

  render() {
    // console.log("props",this.props)
    const { restuarant , deleteRestaurant} = this.props;

    // console.log("rest component", restaurant)
 
    return (
      <div>
        <li>
          {restuarant.text}
          <button onClick={() => this.handleClick()}> X </button>
          <ReviewsContainer restuarant={restuarant}/>
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
