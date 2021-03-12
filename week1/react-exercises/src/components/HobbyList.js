import React from 'react'
import Hobbies from './Hobbies'


function HobbyList() {
    const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];
    return (
        <div className="hobbies-list">
        <h1>Hobbies</h1>
        <ul >
        
        {hobbies.map((hobby)=>(<Hobbies key={hobby} hobby={hobby}/>))}
        </ul>
        </div>
    )
}

export default HobbyList
