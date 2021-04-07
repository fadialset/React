import { useState, useEffect, useRef } from 'react';
import useFetch from './fetchData';
import City from './City';

const Search = () => {
  const [cityName, setCityName] = useState('');
  const refContainer = useRef(null);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`;
  const {
    isLoading,
    hasError,
    cityNotFound,
    cityList,
    cityExist,
    setCityList,
    setCityNotFound,
    setCityExist,
    fetchWeatherInformation,
  } = useFetch(url);

  const deleteCity = (cityID) => {
    setCityList(cityList.filter((city) => city.id !== cityID));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetchWeatherInformation();
  };

  useEffect(() => {
    refContainer.current.focus();
  });

  return (
    <div className='search'>
      <h1 className='headerCityPage'>Weather App</h1>
      <form onSubmit={onSubmit}>
        <input
          className='searchInput'
          type='text'
          placeholder='Search City'
          value={cityName}
          ref={refContainer}
          onChange={(e) => {
            setCityName(e.target.value);
            setCityNotFound(false);
            setCityExist(false);
          }}
        />
        <button
          className='searchSubmit'
          type='submit'
          disabled={!cityName && true}
        >
          Search
        </button>
      </form>
      {isLoading && <p className='loading'>Loading....</p>}
      {hasError && <p className='error'>Something Went Wrong!</p>}
      {cityExist && (
        <p className='error'>
          You have already searched for this city
        </p>
      )}
      {cityName && cityNotFound && (
        <p className='error'>
          City Not Found
        </p>
      )}
      {cityList.map((city) => (
        <City
          city={city}
          key={city.id}
          deletCity={() => deleteCity(city.id)}
        />
      ))}
    </div>
  );
};

export default Search;