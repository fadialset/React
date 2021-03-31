import React from 'react'
import './friend.css'
function FriendProfile({friend}) {
    return (
    <ul>
            <li>
                <span>Full Name: </span>
                {friend.name.title} {friend.name.first} {props.name.last}
            </li>

            <li>
                <span>Country & City: </span>
                {friend.location.country}, {friend.location.city}
            </li>

            <li>
                <span>Address: </span>
                {friend.location.street.name} {friend.location.street.number}, {props.location.postcode}
            </li>

            <li>
                <span>Email Address: </span>
                {friend.email}
            </li>

            <li>
                <span>Phone Number: </span>
                {friend.phone}
            </li>
            <li>
                <img className='friendImage' src={friend.picture.large} alt='friendImage'/>
            </li>
    </ul>  
    )
}
export default FriendProfile