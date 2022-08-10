import React, { Component } from 'react'

export default class City extends Component {

    constructor(props) {
        super(props);
        this.state = { value: 'Select City' };
    }


    render() {
        let { stateName, countryName, childToParent } = this.props

        return (
            <div className='container'>
                <div className='jumbotron'>
                    <h4>City Component</h4><hr />
                    <h6>Country Name : {countryName}</h6>
                    <h6>State Name : {stateName}</h6><hr />

                    <select className='btn btn-primary dropdown-toggle' value={this.state.value} onChange={(e) => childToParent(e.target.value)}>
                        <option value="">Select City</option>
                        <option value="Pune">Pune</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Nagpur">Nagpur</option>
                        <option value="Solapur">Solapur</option>
                    </select>
                    &nbsp;
                    <br /><br />

                </div>
            </div>
        )
    }


    selectCity = (event) => {
        console.log('event 2: ' + event)
    }

}
