import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import './city.css'

const City = ({ city, deletCity }) => {
  const { name, sys, weather, main, coord, id } = city;
  return (
    <div className='cityWeather'>
      <FaTimes className='icon' onClick={() => deletCity(id)} />
      <Link to={`/${name}/${id}`} className='city'>
        <h1>
          {name} - {sys.country}
        </h1>
        <h2>
          {weather[0].main} - {weather[0].description}
        </h2>
        <p>min temp: {main.temp_min} °C</p>
        <p>max temp: {main.temp_max} °C</p>
        <p>
          location: {coord.lat}, {coord.lon}
        </p>
        <img
        className='weatherImage'
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt='weatherImage'
      />
      </Link>
    </div>
  );
};

export default City;