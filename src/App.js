import './App.css';
import React, { useState } from 'react';

function App() {
  const [city, setCity] = useState(null)
  const [search, setSearch] = useState('karachi')
  React.useEffect(() => {
    const getData = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=901d672d14c778eefb41af3fd3871f1f`
      const response = await fetch(url);
      const resJn = await response.json();
      setCity(resJn.main);
    }
    getData();

  }, [search]);

  return (
    <div className="App">
      <div className= "container">
      <h1>Weather App</h1>
      <input className="search-box" type="text" placeholder="City Name" onChange={(e) => { setSearch(e.target.value) }}></input>
      {!city ? (<p>No Data Found</p>) : (
        <div><h3>{search}</h3>
          <p>Temperature {city.temp}°C</p>
          <p>RealFeel {city.feels_like}°C</p>
          <p>H {city.temp_max}°C | L {city.temp_min}°C</p>
        </div>
      )

      }
      </div>

    </div>
  );
}

export default App;