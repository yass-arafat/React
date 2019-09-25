import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* without parameter */}
            {/* <button onClick = {props.greetHandler}>Grret Parent</button> */}
            
            {/* with parameter */}
            <button onClick = {() => props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent