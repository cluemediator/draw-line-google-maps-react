import React, { useState, useEffect } from 'react';
import GMap from './GMap';

// API key of the google map
const GOOGLE_MAP_API_KEY = '<YOUR_GOOGLE_MAP_API_KEY>';

// load google map script
const loadGoogleMapScript = (callback) => {
  if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
    callback();
  } else {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=geometry`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", callback);
  }
}

const App = () => {
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMap(true)
    });
  }, []);

  return (
    <div className="App">
      <h4>Draw a line between two points on google maps in React - <a href="https://www.cluemediator.com">Clue Mediator</a></h4>
      {!loadMap ? <div>Loading...</div> : <GMap />}
      <br />
      <small><b>Note:</b> In order to make it work, you have to set the YOUR_GOOGLE_MAP_API_KEY in App.js file. </small>
    </div>
  );
}

export default App;
