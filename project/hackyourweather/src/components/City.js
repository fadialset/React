import './city.css'

const City = ({ city ,deleteCity}) => {
  return (
    <div className='cityWeather'>
      <div className='city'>
        <h1>
          {city.name}, {city.sys.country}
        </h1>
        <button onClick={deleteCity} className="btn">X</button>
        <h2>{city.weather[0].main}</h2>
        <h3>{city.weather[0].description}</h3>
        <p>min temp: {city.main.temp_min} °C</p>
        <p>max temp: {city.main.temp_max} °C</p>
        <p>
          location: {city.coord.lat}, {city.coord.lon}
        </p>
      </div>
      <img
        className='weatherImage'
        src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
        alt='weatherImage'
      />
    </div>
    
  );
};

export default City;