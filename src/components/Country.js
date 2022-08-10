import React, { Component } from 'react'
import State from './State'

export default class Country extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

   

    render() {

        const getStateCity = (data) =>{
            let newState = {
                StateName: data.StateName,
                CityName: data.CityName
            }
            this.setState(newState);
        }

        return (
            <div className='container'>
                <div className='jumbotron'>
                    <h4>Country Component</h4>
                    <h6>State Name : {this.state.StateName}</h6>
                    <h6>City Name : {this.state.CityName}</h6><hr />
                    <State countryName='India' getStateCityData={getStateCity}/>
                </div>
            </div>
        )
    }
}
