import React from 'react'
import './button.css'
function Button({getAFrined}) {
    return (
        <button onClick={getAFrined} className="btn">
            Get a frined!
        </button>
    )
}

export default Button
