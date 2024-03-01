import React from "react";

import "./ForecastItem.css";

const ForecastItem = props => {
	const { date,day,temperature,weather } = props;

	const setImage = () => {
		switch (weather) {
			case 'sunny':
				return"sunny.png"
			case "rainy":
				return"rainy.png"
			case "cloudy":
				return"cloudy.png"
		}
	}

	return <div className="forecast-card">
		<h3>{day}</h3>
		<div>{date}</div>
		<img src={setImage()} alt={setImage()}/>
		<div>{temperature}</div>
	</div>
}

export default ForecastItem;