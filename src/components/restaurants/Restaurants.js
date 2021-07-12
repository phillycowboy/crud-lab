import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        Restaurants Component
        <Restaurant />
      </ul>
    );
  }
};

export default Restaurants;