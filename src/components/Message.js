import React from 'react'

export default function Message(props) {
    
    console.log(props.username)
    return (
        <div>
            <h2>{props.username}</h2>
            <p>{props.message}</p>
        </div>
    )
}
