import { useState } from 'react';
import City from './City';

const Search = () => {
  const [cityName, setCityName] = useState('');
  const [weather, setWeather] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [invalidRequest, setInvalidRequest] = useState(false);
  const [emptyCityName, setEmptyCityName] = useState(false);

  const fetchWeatherData = async () => {
    if (cityName) {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`
        );
        if (response.ok) {
          const data = await response.json();
          setWeather(data);
          setIsLoading(false);
          setHasError(false);
          setEmptyCityName(false);
          setInvalidRequest(false);
        } else {
          setHasError(false);
          setWeather();
          setEmptyCityName(false);
          setInvalidRequest(true);
          setIsLoading(false);
        }
      } catch {
        setWeather();
        setEmptyCityName(false);
        setInvalidRequest(false);
        setHasError(true);
        setIsLoading(false);
      }
    } else {
      setEmptyCityName(true);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <div className='search'>
      <h1 id='headerCityPage'>Weather App</h1>
      <form onSubmit={onSubmit}>
        <input
          className='searchInput'
          type='text'
          placeholder='Search City'
          value={cityName}
          onChange={(e) => {
            setCityName(e.target.value);
            setWeather();
            setInvalidRequest(false);
          }}
        />
        <input className='searchSubmit' type='submit' value='Search' />
      </form>

      {!hasError && !invalidRequest && isLoading && (
        <p id='loading'>Loading....</p>
      )}
      {cityName && weather && <City props={weather} />}
      {hasError && <p id='error'>Something Went Wrong!</p>}
      {invalidRequest && (
        <p id='error'>City Name Not Found, Please Enter Correct City Name!</p>
      )}
      {emptyCityName && <p id='error'>Please Enter City Name!</p>}
    </div>
  );
};

export default Search;