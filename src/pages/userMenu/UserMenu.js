import React, { useState, useEffect, useRef} from "react";
import Modal from "../../components/modal/Modal";

import "./UserMenu.css";
import TripsList from "../../components/tripsList/TripsList";
import Forecast from "../../components/forecast/Forecast";

const UserMenu = props => {
	const [isError, setIsError] = useState(false);
	const activeItem = props.trips.find(item => item.id === props.activeId);
	console.log("activeItem: ", activeItem, props.activeId);

	const modal = useRef();
	const city = useRef();
	const fromDate = useRef();
	const toDate  = useRef();

	const onSave = () => {
		const selectedCity = city.current.value;
		const selectedToDate = toDate.current.value;
		const selectedFromDate = fromDate.current.value;

		if (!selectedCity || !selectedToDate || !selectedFromDate) {
			setIsError(true);
			return;
		}
		props.onSave({ city: selectedCity, from: selectedFromDate, to: selectedToDate });
		modal.current.close();
	}

	return (
		<>
			<Modal ref={modal}>
				<header>Create trip</header>
				<div>
					<select ref={city}>
						<option value="berlin">Berlin</option>
					</select>
					<input type="date" ref={fromDate}></input>
					<input type="date" ref={toDate}></input>
					{isError && <p>Error was occurred</p>}
				</div>
				<footer>
					<div>
						<button onClick={() => modal.current.close()}>Close</button>
						<button onClick={onSave}>Save</button>
					</div>
				</footer>
			</Modal>
			<main>
				<div className="searchbar">

				</div>
				<TripsList items={props.trips} onClick={props.onSelect} />
				<button className="add-button" onClick={() => modal.current.open()} >Add Trip</button>
				{activeItem && <Forecast item={activeItem} />}
			</main>
		</>
		
	);
}

export default UserMenu;