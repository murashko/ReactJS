import React from 'react';

const Weather = props => (
	<div>{props.data.city ?
		(<div>
			<p>Местоположение: {props.data.city}, {props.data.country}</p>
			<p>Температура: {props.data.temp} °C (мин. {props.data.tempMin} °C, мак. {props.data.tempMax} °C), ощущается {props.data.feelsLike} °C.</p>
			<p>Скорость ветра: {props.data.wind} м/с</p>
			<p>Влажность: {props.data.humidity}%</p>
			<p>Атмосферное давление: {props.data.pressure} Па</p>
			<p>Видимость: {props.data.visibility} м</p>
			<p>Восход солнца: {props.data.sunrise}</p>
			<p>Заход солнца: {props.data.sunset}</p>
		</div>)
		: (<span>{props.data.error}</span>)}</div>
);

export default Weather;