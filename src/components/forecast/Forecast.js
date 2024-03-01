import React, {useEffect} from "react";

import "./Forecast.css"
import ForecastItem from "../forecastItem/ForecastItem";

const Forecast = props => {
	const {city, to, from} = props; 
	const forecastUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${from}/${to}?unitGroup=metric&include=days&key=LWECL5EWTZ4DNPDY3TRMGLU2L&contentType=json`
	useEffect(() => {
		async function getForecast() {
			try {
				const response = await fetch(forecastUrl);
				const json = await response.json();
				console.log("Success:", JSON.stringify(json));
			} catch (error) {
				console.error("Error:", error);
			}
		}
		// if (city) {
		// 	getForecast();
		// }
	}, []);
	// return <div className="forecast-list">
	// 	{props.items.map(item => <ForecastItem {...item} key={item.date}/>)}
	// </div>
}

export default Forecast;