import React, { Component } from 'react';


export default class Timer extends Component {
  constructor(){
    super();
    var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        this.state = {
            date: date
        };
    
    
  }
  render(){
    return(
      <div>
      <div> { this.state.date } </div>
      <h1> this is my timer</h1>
      </div>
    );
  }
  
}
