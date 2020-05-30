import React, { Component } from 'react';
class Color extends Component {
    state = {
        favoriteColor:'red',
        favoriteColor2:'yellow'

      }
    render() { 
        return (<h1> My favorite color is {this.state.favoriteColor} and {this.state.favoriteColor2}</h1>  );
    }
}
 
export default Color;