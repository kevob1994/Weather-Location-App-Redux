import React, { Component } from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import { CLOUD, 
	CLOUDY, 
	SUN, 
	RAIN, 
	SNOW, 
	WINDY,
	THUNDER,
	DRIZZLE 
} from '../../../constants/weathers';
import './styles.css';

export default class WeatherTemperature extends Component {

	stateToIconName = (weatherState) => {
		switch (weatherState) {
			case CLOUD:
				return 'cloud';
			case CLOUDY:
				return 'cloudy';
			case SUN:
				return 'day-sunny';
			case RAIN:
				return 'rain';
			case SNOW:
				return 'snow';
			case WINDY:
				return 'windy';
			case THUNDER:
				return 'day-thunderstorm';
			case DRIZZLE:
				return 'day-showers';
			default:
				return 'day-sunny';
		}
	};

	getWeatherIcon = (weatherState) => {
		return <WeatherIcons className="wicon" name={this.stateToIconName(weatherState)} size="4x" />;
	};

	render() {
		let { temperature } = this.props;
		let { weatherState } = this.props;
		return (
			<div className="weatherTemperatureCont">
				{this.getWeatherIcon(weatherState)}
				<span className="temperature">{` ${temperature} `}</span>
				<span className="grade">C°</span>
			</div>
		);
	}
}

WeatherTemperature.propTypes = {
	temperature: PropTypes.number.isRequired,
	weatherState: PropTypes.string.isRequired,
};
