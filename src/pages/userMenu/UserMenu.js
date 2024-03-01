import React, { useState, useEffect, useRef} from "react";
import Modal from "../../components/modal/Modal";

import "./UserMenu.css";
import TripsList from "../../components/tripsList/TripsList";
import Forecast from "../../components/forecast/Forecast";

const UserMenu = props => {
	const [activeId, setActiveId] = useState(null);
	const [isError, setIsError] = useState(false);
	const [isModalActive, setIsModalActive] = useState(false);
	const activeItem = props.info.find(item => item.id === activeId);

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
		const forecastUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${selectedCity}/${selectedFromDate}/${selectedToDate}?unitGroup=metric&include=days&key=LWECL5EWTZ4DNPDY3TRMGLU2L&contentType=json`
		// try {
		// 	const response = await fetch(forecastUrl);
		// 	const json = await response.json();
		// 	console.log("Успех:", JSON.stringify(json));
		props.onSave({ city: selectedCity, from: selectedFromDate, to: selectedToDate});
		// } catch (error) {
		// 	console.error("Ошибка:", error);
		// }
	}

	const selectItemHandler = (id) => {
		setActiveId(id);
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
				<TripsList items={props.info} onClick={selectItemHandler} />
				<button className="add-button" onClick={() => modal.current.open()} >Add Trip</button>
				{activeItem && <Forecast items={activeItem.forecast} />}
			</main>
		</>
		
	);
}

export default UserMenu;