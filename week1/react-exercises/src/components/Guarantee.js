import React from 'react'

const Guarantee = ({component}) => {
    return (
        <div className="guarantee">
            <img src={component.img} alt=''/>
            <h2>{component.title}</h2>
            <p>{component.description}</p>
        </div>
    )
}

export default Guarantee
