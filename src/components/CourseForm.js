import React, { Component } from 'react'

class CourseForm extends Component {


  constructor(props) {
    super(props);
    this.state = {
      id: 1234,
      name: 'React',
      price: 2000
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleSubmit(event) {
    alert('Your Course Details: ' + this.state.id + "  " + this.state.name + "  " + this.state.price);
    event.preventDefault();
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
    return (
      <div className="text-primary">
        <h2>Course Controlled Form </h2>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Course Id</label>
            <input type="text" value={this.state.id} className="form-control" id="id" placeholder="Enter Course Id" name="id" onChange={this.handleInputChange} />
          </div>

          <div className="form-group">
            <label>Course Name</label>
            <input type="text" value={this.state.name} className="form-control" id="name" placeholder="Enter Course Name" name="name" onChange={this.handleInputChange} />
          </div>

          <div className="form-group">
            <label>Course Price </label>
            <input type="text" value={this.state.price} className="form-control" id="price" placeholder="Enter Course Price" name="price" onChange={this.handleInputChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <pre>
          Course Id :{this.state.id}


          Name      :{this.state.name}


          Price     :{this.state.price}

        </pre>


      </div>
    )
  }
}

export default CourseForm
