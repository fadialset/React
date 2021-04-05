import { useState } from 'react';
import City from './City';

const Search = () => {
  const [cityName, setCityName] = useState('');
  const [citiesList,setCitiesList] = useState([]);
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
          setCitiesList([data, ...citiesList]);
          setIsLoading(false);
          setHasError(false);
          setEmptyCityName(false);
          setInvalidRequest(false);
        } else {
          setHasError(false);
          setCitiesList();
          setEmptyCityName(false);
          setInvalidRequest(true);
          setIsLoading(false);
        }
      } catch {
        setCitiesList();
        setEmptyCityName(false);
        setInvalidRequest(false);
        setHasError(true);
        setIsLoading(false);
      }
    } else {
      setEmptyCityName(true);
    }
  };
  const deleteCity = (cityID) => {
    setCitiesList(citiesList.filter((city) => city.id !== cityID));
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
            setInvalidRequest(false);
          }}
        />
        <input className='searchSubmit' type='submit' value='Search' />
      </form>

      {!hasError && !invalidRequest && isLoading && (
        <p id='loading'>Loading....</p>
      )}
      {cityName && citiesList && citiesList.map((city)=><City city={city} key={city.id} deleteCity={() => deleteCity(city.id)}/>)}
      {hasError && <p id='error'>Something Went Wrong!</p>}
      {invalidRequest && (
        <p id='error'>City Name Not Found, Please Enter Correct City Name!</p>
      )}
      {emptyCityName && <p id='error'>Please Enter City Name!</p>}
    </div>
  );
};

export default Search;