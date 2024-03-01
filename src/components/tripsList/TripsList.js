import React from "react";

import TripItem from "../tripItem/TripItem";
import "./TripsList.css";

const TripsList = props => {
	return <div>{props.items.map(item => 
		<TripItem
		 key={item.id}
		 id={item.id} 
		 city={item.city} 
		 image={item.image} 
		 to={item.to} 
		 from={item.from} 
		 onClick={props.onClick} />
	)}</div>;
}

export default TripsList;