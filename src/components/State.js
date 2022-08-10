import React, { Component } from 'react'
import City from './City'

export default class State extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        let { countryName, getStateCityData } = this.props

        const getData = (data) => {
            console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)

            let newState = {
                cityName: data
            }
            this.setState(newState);
        }
        let CityState = {
            StateName: 'Maharashtra',
            CityName: this.state.cityName
        }
        return (
            <div className='container'>
                <div className='jumbotron'>
                    <h4>State Component</h4><hr />

                    <h6>Country Name : {countryName}</h6>
                    <h6>City Name : {this.state.cityName}</h6><hr />
                    <button className='btn btn-primary' onClick={() => getStateCityData(CityState)}>Send City Name To State</button>


                    <City stateName={CityState.StateName} countryName={countryName} childToParent={getData} />


                </div>
            </div>
        )
    }
}
