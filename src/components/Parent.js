import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parentMsg: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);

    }


    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        console.log(target, name, value);

        this.setState({
            [event.target.name]: event.target.value
        });
    }



    render() {

        const getData = (data) => {
            console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)

            let newState = {
                childMessage: data
            }
            this.setState(newState);
        }
        return (
            <div className='parent' >
                <div style={{ border: "2px solid black", padding: "3%", margin: "5px" }}>

                    <h2 className='text-center' style={{ color: "blue" }}>Parent Component</h2>
                    <br />
                    <h4>Message From Child : {this.state.childMessage}</h4>
                    <br />

                    <input type="text" value={this.state.parentMsg} className="form-control" id="id" placeholder="Enter Message For Child" name="parentMsg" onChange={this.handleInputChange} />

                    <br></br>
                </div>
                <Child message={this.state.parentMsg} childToParent={getData} />
            </div>

        )
    }
}