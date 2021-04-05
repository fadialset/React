import React from 'react'
import './button.css'

function Button({getFrined}) {
    return (
        <button onClick={getFrined} className="btn">
            Get a frined!
        </button>
    )
}

export default Button
