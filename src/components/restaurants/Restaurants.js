import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
     const {restaurants, deleteRestaurant} = this.props
    // console.log("restaurants", restaurants)
     const restaurantList = restaurants.map(restaurant => {
       return (
         <Restaurant 
         key={restaurant.id}
         restuarant={restaurant} 
         deleteRestaurant={deleteRestaurant}
         />)
        })
        // console.log("rest list", restaurantList)
    return(
      <ul>
        {restaurantList}
      </ul>
    );
  }
};

export default Restaurants;