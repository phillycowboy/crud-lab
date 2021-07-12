import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
     const {restaurants} = this.props
    console.log("restaurants", restaurants)
     const restaurantList = restaurants.map(restaurant => {
       return (
         <Restaurant 
         key={restaurant.id}
         restuarant={restaurant.text} 
         // deleteRestaurant={deleteRestaurant}
         />)
        })
        console.log("rest list", restaurantList)
    return(
      <ul>
        "hello"
        {restaurantList}
      </ul>
    );
  }
};

export default Restaurants;