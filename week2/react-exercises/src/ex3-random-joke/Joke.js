import React from 'react'

function Joke({props}) {

    return (
        <div>
            <p>setup : {props.setup}</p>
            <p>punchline : {props.punchline}</p>
        </div>
    )
}

export default Joke
