import React from 'react'
import { useState} from 'react'
import Count from './Count'
import Button from './Button'

const Counter = () => {
    const [count,setCount] = useState(0)
    function increasCount(){
        setCount(prevCount => prevCount + 1)
    }
    let feedback =(count > 10 ? "it's higher than 10" : "Keep counting ...")
    
    
    return (
        <div className="counter">
            <Count count={count}/>
            <Button setCount={increasCount}/>
            <span>{feedback}</span>
        </div>
    )
}

export default Counter
