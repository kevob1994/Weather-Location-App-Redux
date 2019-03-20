import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/trasnformForecast'

// const days = [
//     'Lunes',
//     'Martes',
//     'Miercoles',
//     'Jueves',
//     'Viernes',
//     'Sabado',
//     'Domingo'
// ]

// const data = {
//     temperature: '10',
//     weatherState: 'normal',
//     humidity: '10',
//     wind: 'normal',
// }
const api_key = '5d7305879e8ef1df27543cedf1bb072c';
const url = "https://api.openweathermap.org/data/2.5/forecast"

export default class ForecastExtended extends Component {
    constructor(props){
        super(props);
        this.state = {
            city: this.props.city,
            forecastData: null
        }
    }

    componentDidMount() {
        this.updateCity(this.state.city);
    }

    updateCity = city => {
        console.log(city,"HOLA")
		const api_forecast = `${url}?q=${city}&appid=${api_key}`;
        fetch(api_forecast).then(data => {
			return data.json();
		}).then( weather_data => {
            // console.log(weather_data)
            const forecastData = transformForecast(weather_data);
            // console.log("forecastData",forecastData)
            this.setState({ forecastData })
		});
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city){
            this.setState({city:nextProps.city});
            this.updateCity(nextProps.city);
        }
    }

    renderForecastItemsDays = (forecastData) => {
        return( 
            forecastData.map((forecast) => (
                <ForecastItem
                    key={`${forecast.weekDay}${forecast.hour}`}
                    weekDay={forecast.weekDay} 
                    hour={forecast.hour} 
                    data= {forecast.data}
                />))
            )
    }

    renderProgress = () => {
        return <p>Cargando pronostico extendido</p>
    }

    render() {
        
        const { city } = this.state
        const { forecastData } = this.state
        return (
            <div>
               <h2 className="forecast-title" >Pronóstico Extendido para {city}</h2> 
               {forecastData ? 
                    this.renderForecastItemsDays(forecastData) :
                    this.renderProgress()     
                }         
            </div>
        )
  }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}