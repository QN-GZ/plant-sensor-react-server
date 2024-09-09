import './app-body.css';
import './ViewPlants.css'
import React, { useState } from 'react';
import ViewPlants from './ViewPlants.js';

const BUTTON_CLASSES = {
  VIEW_PLANTS : 'View-Plants',
  LOADING : 'Loading',
  DISCOVER_PLANTS : 'Discover-Plants',
  REPORTS : 'Reports',
  DEFAULT: 'App-body',
  GO_BACK : 'Go-Back'
}

const VIEW = {
  DEFAULT: 0,
  PLANTS: 1,
  LOADING: 2,
  DISCOVER: 3,
  REPORTS: 4
};

var state = {
  view: BUTTON_CLASSES.DEFAULT,
  plantsData: []
}

const AppBody = () => {
  const [view, setView] = useState(VIEW.DEFAULT);

  const handleButtonClick = (className) => {
    state.view = className;
    if (BUTTON_CLASSES.VIEW_PLANTS === className) {
      setView(VIEW.LOADING);
      const url = process.env.REACT_APP_PLANT_SERVER_HTTP_ENDPOINT_PLANTS; // TODO need to get this from the environment
      console.log(url)
      const body = {
        method: 'GET',
        headers: {
          Accept: '*/*',
        }
      };     
      fetch(url, body)
        .then(response => response.json())
        .then(data => {
          console.log('fetchPlants: data', data);
          state.plantsData = data;
          setView(VIEW.PLANTS);
        })
        .catch(error => {
          console.error('fetchPlants: error', error);
          alert(`Couldn't retrieve plant info! URL '${url}'`);
        });
    } else if (BUTTON_CLASSES.DISCOVER_PLANTS === className) {
      alert('Discover Plants button clicked!');
    } else if (BUTTON_CLASSES.REPORTS === className) {
      alert('Reports button clicked!');
    } else if (BUTTON_CLASSES.GO_BACK === className) {
      setView(VIEW.DEFAULT);
    }
  }
  
  return (
    <body className="App-body">
      {view === VIEW.PLANTS ? (
        <body className="view-plant-body">
          <ViewPlants plantsData={state.plantsData} />
          <button className={BUTTON_CLASSES.GO_BACK} onClick={() => handleButtonClick(BUTTON_CLASSES.GO_BACK)}>Go Back</button>
        </body>
      ) : view === VIEW.LOADING ? (
        <body className="App-body">
          <progress value={50} max={100}/>
        </body>
      ) : view === VIEW.DISCOVER ? (
        <body className="discover-body">
          <h1>Discover Plants</h1>
          <button className={BUTTON_CLASSES.GO_BACK} onClick={() => handleButtonClick(BUTTON_CLASSES.GO_BACK)}>Go Back</button>
        </body>
      ) : view === VIEW.REPORTS ? (
        <body className="reports-body">
          <h1>Reports</h1>
          <button className={BUTTON_CLASSES.GO_BACK} onClick={() => handleButtonClick(BUTTON_CLASSES.GO_BACK)}>Go Back</button>
        </body>
      ) : (
        <body className="App-body">
          <button className={BUTTON_CLASSES.VIEW_PLANTS} onClick={() => handleButtonClick(BUTTON_CLASSES.VIEW_PLANTS)}>View Plants</button>
          <button className={BUTTON_CLASSES.DISCOVER_PLANTS} onClick={() => handleButtonClick(BUTTON_CLASSES.DISCOVER_PLANTS)}>Discover</button>
          <button className={BUTTON_CLASSES.REPORTS} onClick={() => handleButtonClick(BUTTON_CLASSES.REPORTS)}>Reports</button>
        </body>
      )}
</body>
  );
}

export default AppBody;
