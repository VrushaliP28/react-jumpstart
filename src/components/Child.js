import React, { Component } from 'react'

export default class Child extends Component {

  render() {
    //  this.props.childtoparent("From child :- Hiii")
    let { message, childToParent } = this.props


    return (
      <div style={{ border: "2px solid black", padding: "3%" , margin:"5px"}}>
        <h2 className='text-center' style={{ color: "green" }}>Child Component</h2>
       <br />

        <h4>Message from Parent : {message}</h4>

       <br />


        <input type="text" placeholder="Enter Message For Parent " class="form-control" onChange={(e) => childToParent(e.target.value)} />
        <br />
      </div>
    )
  }
}
