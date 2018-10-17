import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default class Location extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { city } = this.props;
		return (
			<div className="locationCont">
				<h1>{city}</h1>
			</div>
		);
	}
}

Location.propTypes = {
	city: PropTypes.string.isRequired,
};
