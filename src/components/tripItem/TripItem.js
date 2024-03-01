import React from "react";

import "./TripItem.css";

const TripItem = props => {
	return <div className="card" onClick={() => props.onClick(props.id)}>
		<div>{props.city}</div>
		<img src={props.image} alt="IMAGE"/>
		<div>{props.from}-{props.to}</div>
	</div>
}

export default TripItem;