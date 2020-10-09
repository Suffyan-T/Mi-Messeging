import React from 'react'
import Message from './Message'
export default function Messages(props) {
    const username=props.username
    return (
        <div>
            {props.messages.map(message=> <Message username={props.username} message={message} />)}
        </div>
    )
}
