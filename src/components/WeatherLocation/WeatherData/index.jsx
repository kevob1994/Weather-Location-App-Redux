import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './weatherTemperature';
import WeatherExtraInfo from './weatherExtraInfo';

import './styles.css';

export default class WeatherData extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { temperature, weatherState, humidity, wind } = this.props.data;

		return (
			<div className="weatherDataCont">
				<WeatherTemperature temperature={temperature} weatherState={weatherState} />
				<WeatherExtraInfo humidity={humidity} wind={wind} />
			</div>
		);
	}
}

WeatherExtraInfo.propTypes = {
	data: PropTypes.shape({
		temperature: PropTypes.number.isRequired,
		weatherState: PropTypes.string.isRequired,
		humidity: PropTypes.number.isRequired,
		wind: PropTypes.string.isRequired,
	}),
};
