import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { setCity } from './../redux/actions'
import { connect } from 'react-redux';
import LocationList from '../components/LocationList';

class LocationListContainer extends Component {

    handleSelectedLocation = city => this.props.setCity1(city)

    render() {
        return (
            <div>
            <LocationList 
            cities={ this.props.cities }
            onSelectedLocation = {this.handleSelectedLocation}/>
            </div>
        );
    }
}

LocationListContainer.propTypes = {
    setCity1: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
}

const mapDispatchToProps = dispatch => ({
	setCity1: value => dispatch(setCity(value))
});

const Connected = connect(null, mapDispatchToProps)(LocationListContainer);


export default Connected;

