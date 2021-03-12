import React from 'react'

function City({name,country,weatherMain,weatherDescription,minTemp,maxTemp,longitude,lattitude}) {
    return (
        <div className="city">
            <h1>{name},{country}</h1>
            <h2>{weatherMain}</h2>
            <h3>{weatherDescription}</h3>
            <p>min temp : {minTemp}</p>
            <p>max temp : {maxTemp}</p>
            <p>location : {longitude} , {lattitude}</p>
        </div>
    )
}

export default City
