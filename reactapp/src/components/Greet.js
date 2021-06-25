import React from 'react'

function Greet(props) {
    return (
        <div>
            <h1>Greet {props.name} aka {props.heroName}</h1>
            <h2>{props.children}</h2>
        </div>
    )

    // return React.createElement('div', null, React.createElement('h1', null, 'Hello World'));
}

export default Greet
