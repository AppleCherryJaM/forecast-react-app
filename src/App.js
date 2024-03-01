import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import './App.css';
import UserMenu from './pages/userMenu/UserMenu';

const INFO = [
    {
      "id": 0,
      'city': "Odessa",
      "image": "",
      "from": "14/05/22",
      "to":"16/05/22",
      'forecast': [
        {
          'date': "14/05/22",
          'day': "Monday",
          'temperature': '24',
          "weather": "rainy"
        },
        {
          'date': "15/05/22",
          'day': "Tuesday",
          'temperature': '27',
          "weather": "cloudy"
        },
        {
          'date': "16/05/22",
          'day': "Wednesday",
          'temperature': '30',
          "weather": "sunny"
        }
      ],
    },
  {
    "id": 1,
    'city': "Odessa",
    "image": "",
    "from": "14/05/22",
    "to": "16/05/22",
    'forecast': [
      {
        'date': "14/05/22",
        'day': "Monday",
        'temperature': '24',
        "weather": "rainy"
      },
      {
        'date': "15/05/22",
        'day': "Tuesday",
        'temperature': '27',
        "weather": "cloudy"
      },
      {
        'date': "16/05/22",
        'day': "Wednesday",
        'temperature': '30',
        "weather": "sunny"
      }
    ],
  }
];

const CITIES = [""];

const App = () => {
  const LOCAL_STORAGE_TOKEN = "trips";
  const [tripsState, setTripsState] = useState({
    selectedTripId: undefined, 
    trips: []
  });
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const saveHandler = (tripData) => {
    console.log(tripData)
    setTripsState((prevState) => {
      const newTrip = {
        ...tripData,
        id: prevState.trips.length+1
      };
      return { ...prevState, trips: [...prevState.trips, newTrip], selectedTripId: undefined };
    })
    console.log(tripsState);
  }

  //fetch

  useEffect(() => {
    const retrieveData = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_TOKEN)
    );
    if (retrieveData) {
      setTripsState(retrieveData);
    }
  },[]);

  useEffect(() => { localStorage.setItem(LOCAL_STORAGE_TOKEN, JSON.stringify(tripsState)) }, [tripsState]);
  return (
    <UserMenu info={INFO} onSave={saveHandler}/>
  );
}

export default App;
