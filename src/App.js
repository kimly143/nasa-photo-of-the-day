import React, { useState, useEffect } from "react";
import axios from 'axios';

import "./App.css";
import Loading from "./components/Loading/Loading";
import APOD from "./components/APOD/APOD";

// make sure not commit API key in github
const API_KEY = process.env.REACT_APP_NASA_API_KEY;
const APOD_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

function App() {
  const [imageData, setImageData] = useState(null);
  useEffect(
    () => {
      axios.get(APOD_URL)
        .then(response => {
          setImageData(response.data);
        })
        .catch(error => console.error(error));  
    },
    []
  );

  return (
    <div className="App">
      {!imageData && <Loading />}

      {imageData && <APOD apodData={imageData} />}
    </div>
  );
}

export default App;
