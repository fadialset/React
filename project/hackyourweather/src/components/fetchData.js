import { useState } from 'react';

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [cityNotFound, setCityNotFound] = useState(false);
  const [cityList, setCityList] = useState([]);
  const [cityExist, setCityExist] = useState(false);
  const [forecastData, setForecastData] = useState();

  const fetchWeatherInformation = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      if (response.ok) {
        const newCity = await response.json();
        setCityList((cityList) => {
          if (cityList.some((city) => city.id === newCity.id)) {
            setCityExist(true);
            return [...cityList];
          } else {
            setCityExist(false);
            return [newCity, ...cityList];
          }
        });
        setHasError(false);
        setCityNotFound(false);
      } else {
        setCityExist(false);
        setHasError(false);
        setCityNotFound(true);
      }
    } catch {
      setCityNotFound(false);
      setHasError(true);
      setCityExist(false);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchForecastInformation = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setForecastData(
          data.list.map((day) => {
            return {
              date: day.dt_txt,
              temp: day.main.temp,
            };
          })
        );
        setHasError(false);
      }
    } catch {
      setCityNotFound(false);
      setHasError(true);
      setCityExist(false);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    hasError,
    cityNotFound,
    cityList,
    cityExist,
    setCityList,
    setCityNotFound,
    setCityExist,
    forecastData,
    fetchWeatherInformation,
    fetchForecastInformation,
  };
};

export default useFetch;