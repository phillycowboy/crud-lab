import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant}/>
      </div>
    )
  }
}

const mapStateToProps = ({restaurants}) => ({restaurants})
const mapDispatchToProps = (dispatch) => ({addRestaurant: name => dispatch({type: "ADD_RESTAURANT", name})}) 
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
