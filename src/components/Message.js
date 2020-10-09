import React from 'react'

export default function Message(props) {
    return (
        <div>
            <h2>{props.username}</h2>
            <p>{props.message}</p>
        </div>
    )
}
