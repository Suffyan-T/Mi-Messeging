import React from 'react'


export default function Message(props) {

    console.log(`username is ${props.username}`)
    console.log(`message username is ${props.message.username}`)
    // Checks if username is same as message user
    const isUser= props.username === props.message.username
    return (
        <div className={(isUser ? 'user_message' : 'not_user_message')}>
            <h2>{props.message.username}</h2>
            <p>{props.message.message}</p>
        </div>
    )
}
