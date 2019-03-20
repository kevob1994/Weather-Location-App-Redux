import React, { Component } from 'react'
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData'
import './styles.css'

export default class ForecastItem extends Component {

    constructor({ weekDay, hour, data }){
        super()
        this.state = {
            weekDay,
            hour,
            data
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city){
            this.setState({city:nextProps.city});
            
        }
        if(nextProps.weekDay !== this.props.weekDay ||
            nextProps.hour !== this.props.hour ||
            nextProps.data !== this.props.data ){
            this.setState({
                weekDay:nextProps.weekDay,
                hour:nextProps.hour,
                data:nextProps.data
            });
        }
    }

    render () {
        let {weekDay, hour, data} = this.state;

        return(
            <div>
            <h2>{weekDay} - {hour} hs</h2>
            <WeatherData data= {data} />
            </div>
        )
    }
}

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hora: PropTypes.number.isRequired,
    data: PropTypes.shape({
		temperature: PropTypes.number.isRequired,
		weatherState: PropTypes.string.isRequired,
		humidity: PropTypes.number.isRequired,
		wind: PropTypes.string.isRequired,
	}),
}