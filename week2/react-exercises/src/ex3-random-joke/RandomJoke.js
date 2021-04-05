import { useState, useEffect } from 'react'
import Joke from './Joke'
function RandomJoke() {
    const[joke,setJoke] = useState({});
    const [isLoading,setLoading] = useState(false);
    const [hasError, setError] = useState(false);
    useEffect(()=>{
        const getJoke = async()=>{
        try{
            setLoading(true);
            const response = await fetch("https://official-joke-api.appspot.com/random_joke");
            const data = await response.json();
            setJoke(data)
            setLoading(false);
        }catch{
            setError(true);
            setLoading(false);
        }

    }
    getJoke()
    },[])
    return (
        <div>
        <Joke joke={joke}/>
        </div>
    )
}

export default RandomJoke
