import React from "react";

import "./Forecast.css"
import ForecastItem from "../forecastItem/ForecastItem";

const Forecast = props => {
	return <div className="forecast-list">
		{props.items.map(item => <ForecastItem {...item} key={item.date}/>)}
	</div>
}

export default Forecast;