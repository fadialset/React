import React from 'react'

function Joke({joke}) {

    return (
        <div>
            <p>setup : {joke.setup}</p>
            <p>punchline : {joke.punchline}</p>
        </div>
    )
}

export default Joke
