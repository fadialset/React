import logo from './logo.svg';
import './App.css';
import City from './components/City'
import cityWeather from './city-weather.json';

function App() {
  return (
    <div className="App">
      {cityWeather.map((city)=><City key={city.id} name={city.name} country={city.sys.country} weatherMain={city.weather[0].main} weatherDescription={city.weather[0].description} minTemp={city.main.temp_min} maxTemp={city.main.temp_max} longitude={city.coord.lon} lattitude={city.coord.lat}/>)}
    </div>
  );
}

export default App;
