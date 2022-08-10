import React, { Component } from 'react'

export default class Login extends Component {

    constructor(props){
        super(props)
        this.email = React.createRef()
        this.password = React.createRef()
    }

    handleSubmit = () => {
        alert('Login Details are submitted'+this.email.current.value)
    }


    render() {
        return (
        
                <div>
                <h2>Login Form</h2>
                    <h4>(Un-Controlled Form)</h4>
                    <hr />
                    <form  onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label for="email">Email:</label>
                            <input type="email" ref={this.email} className="form-control" id="email" placeholder="Enter email" name="email" />
                        </div>
                        <div className="form-group">
                            <label for="pwd">Password:</label>
                            <input type="password" ref={this.password} className="form-control" id="pwd" placeholder="Enter password" name="pwd" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
        )
    }
}
