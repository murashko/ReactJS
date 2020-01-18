import React from 'react';
import Info from './info';
import Form from './fotm';
import Weather from './weather';

const API_KEY = "27703d329a327aaad192fb9b627f82ae";

class App extends React.Component {

	state = {
		city: undefined,
		country: undefined,
		temp: undefined,
		feelsLike: undefined,
		tempMin: undefined,
		tempMax: undefined,
		pressure: undefined,
		humidity: undefined,
		visibility: undefined,
		wind: undefined,
		sunrise: undefined,
		sunset: undefined,
		error: undefined
	}

	getWeather = (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;
		if (!city) {
			this.setState({
				city: undefined,
				country: undefined,
				temp: undefined,
				feelsLike: undefined,
				tempMin: undefined,
				tempMax: undefined,
				pressure: undefined,
				humidity: undefined,
				visibility: undefined,
				wind: undefined,
				sunrise: undefined,
				sunset: undefined,
				error: "Укажите название города"
			})
			return;
		}
		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
			.then(response => response.json())
			.then(json => this.setState({
				city: json.name,
				country: json.sys.country,
				temp: json.main.temp,
				feelsLike: json.main.feels_like,
				tempMin: json.main.temp_min,
				tempMax: json.main.temp_max,
				pressure: json.main.pressure,
				humidity: json.main.humidity,
				visibility: json.visibility,
				wind: json.wind.speed,
				sunrise: new Date(json.sys.sunrise).toTimeString(),
				sunset: new Date(json.sys.sunrise + json.sys.sunset).toTimeString(),
				error: undefined
			}))
			.catch(e => console.error(e));
	}

	render() {
		return (
			<div className="wrapper">
				<div className="main">
					<div className="container">
						<div className="row">
							<div className="col-sm-5 info">
								<Info />
							</div>
							<div className="col-sm-7 form">
								<Form getWetherMethod={this.getWeather} />
								<Weather data={Object.assign({}, this.state)} />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App;