import React from 'react'

export default function Messages(props) {
    return (
        <div>
            {props.messages.map(message=> <p>{message}</p>)}
        </div>
    )
}
