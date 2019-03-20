import React, { Component } from 'react';
import './App.css';
import LocationListContainer from './containers/LocationListContainer';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AppBar from '@material-ui/core/AppBar'
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';


const cities = [
	'Caracas,ve',
	'Buenos Aires,ar',
	'Bogotá,col',
	'Santiago,cl',
	'Guadalajara,mx',
	'Novosibirsk,ru',
	'Madrid,es'
]

class App extends Component {


	render() {

		
		return (
			<MuiThemeProvider>
			<AppBar title="WeatherApp">
							<Toolbar>
								<Typography variant="title" color="inherit">
								Weather App
								</Typography>
							</Toolbar>
						</AppBar>
				<Grid>
				
					<Row>
						<Col xs={12} sm={12} md={12} lg={6}>
							<LocationListContainer 
								cities={ cities }/>
						</Col>
						<Col xs={12} sm={12} md={12} lg={6}>
							<Paper elevation={24}>
								<div className="detail">
									<ForecastExtendedContainer />									
								</div>
							</Paper>
						</Col>
					</Row>		
				</Grid>
			</MuiThemeProvider>
		);
	}
}

	
export default App;


