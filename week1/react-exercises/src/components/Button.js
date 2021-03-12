import React from 'react'

const Button = ({setCount}) => {
    return (
        <>
           <button onClick={setCount}>Add 1!</button> 
        </>
    )
}

export default Button
