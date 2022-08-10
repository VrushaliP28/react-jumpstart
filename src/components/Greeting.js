import React, { Component } from 'react'

export default class Greeting extends Component {



  render() {

    let{username,age}=this.props;


    return (
      <div>Greeting of the day {this.props.username}!!! on your {age}th birthday</div>
    )
  }
}
