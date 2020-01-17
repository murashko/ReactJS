import React from 'react';
import Info from './info';
import Form from './fotm';
import Weather from './weather';

const API_KEY = "27703d329a327aaad192fb9b627f82ae";

class App extends React.Component {

	getWeather = (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;
		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
			.then(response => response.json())
			.then(json => console.log(json))
			.catch(e => console.error(e));
	}

	render() {
		return (
			<div>
				<Info />
				<Form getWetherMethod={this.getWeather}/>
				<Weather />
			</div>
		)
	}
}

export default App;