import React, { Component } from 'react'

export default class Registration extends Component {


    constructor(props) {
        super(props)
        this.state = {
            fname: '',
            lname: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleInput = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        console.log(target,name,value)

        this.setState({
            [event.target.name] : event.target.value
        })

    }

    handleSubmit = (event) => {
        alert("Registration Details : " + this.state.fname + " " + this.state.lname + " " + this.state.email)
        event.preventDefault()
    }


    render() {
        return (
            <div>
                <div className="container">
                    <h2>SignUp Form</h2>
                    <h4>(Controlled Form)</h4>
                    <hr />
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label for="fname">First Name:</label>
                            <input type="text" className="form-control" id="fname" placeholder="Enter First Name" name="fname" onChange={this.handleInput} />
                        </div>
                        <div className="form-group">
                            <label for="lname">Last Name:</label>
                            <input type="text" className="form-control" id="lname" placeholder="Enter Last Name" name="lname" onChange={this.handleInput} />
                        </div>
                        <div className="form-group">
                            <label for="email">Email:</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" onChange={this.handleInput} />
                        </div>
                        <div className="form-group">
                            <label for="pwd">Password:</label>
                            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" onChange={this.handleInput} />
                        </div>
                        <div className="form-group">
                            <label for="confirmPwd">Confirm Password:</label>
                            <input type="password" className="form-control" id="confirmPwd" placeholder="Enter Confirm password" name="confirmPwd" onChange={this.handleInput} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
