import React from 'react'
import '../ex1-new-friend/button.css'
const Button = ({ getADog}) => <button onClick={getADog} className="btn">Get a Dog</button>

export default Button
