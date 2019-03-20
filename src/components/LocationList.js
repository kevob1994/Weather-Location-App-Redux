import React, { Component } from 'react'
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';
import './styles.css';

export default class LocationList extends Component {
    constructor({ cities }) {
		super();
		this.state = {
			cities
		};

		console.log(this.state);
    }
    
    strToComponent = cities => (
        cities.map( (city, index) => ( 
            <WeatherLocation 
                city={city} 
                key={city}
                onWeatherLocationClick={() => this.handleWeatherLocationClick(city)}/>
        ))
    )

    handleWeatherLocationClick = city => {
        console.log("handleWeatherLocationClick");
        this.props.onSelectedLocation(city);
    }

    render(){
        const { cities } = this.state
        console.log(cities);
        
        return ( 
            <div className="locationList">
                {this.strToComponent(cities)}
            </div>
        )
    }
}

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}