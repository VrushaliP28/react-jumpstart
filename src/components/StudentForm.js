import React, { Component } from 'react'


export default class StudentForm extends Component {



    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);

        this.studentId = React.createRef();
        this.studentName = React.createRef();
        this.studentAddress = React.createRef();

    }

    handleSubmit(event) {

        let details = `
                     Id      :${this.studentId.current.value}
                     Name    :${this.studentName.current.value}
                     Address :${this.studentAddress.current.value}`;

        alert('A Student details was submitted:\n' + details);
        //event.preventDefault();
    }

    render() {
        return (
            <div className="text-danger">
                <h2>Student UnControlled Form </h2>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Student Id</label>
                        <input type="text" defaultValue="123" ref={this.studentId} className="form-control" id="id" placeholder="Enter Student Id" name="id" />
                    </div>

                    <div className="form-group">
                        <label>Student Name</label>
                        <input type="text" defaultValue="Pradeep Chinchole" ref={this.studentName} className="form-control" id="name" placeholder="Enter Student Name" name="id" />
                    </div>

                    <div className="form-group">
                        <label>Student Address</label>
                        <input type="text" defaultValue="Shivane Pune" ref={this.studentAddress} className="form-control" id="address" placeholder="Enter Student Address" name="id" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>

            </div>
        )
    }
}
