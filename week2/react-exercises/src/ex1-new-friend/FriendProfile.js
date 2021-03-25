import React from 'react'
import './friend.css'
function FriendProfile({props}) {
    return (
    <ul>
        <li><span>Full Name: </span>{props.name.title} {props.name.first} {props.name.last}</li>
        <li><span>Country & City: </span>{props.location.country}, {props.location.city}</li>
        <li><span>Address: </span>{props.location.street.name} {props.location.street.number}, {props.location.postcode}</li>
        <li><span>Email Address: </span>{props.email}</li>
        <li><span>Phone Number: </span>{props.phone}</li>
        <li><img className='friendImage' src={props.picture.large} alt='friendImage'/></li>
    </ul>
           
            
    )
}

export default FriendProfile
