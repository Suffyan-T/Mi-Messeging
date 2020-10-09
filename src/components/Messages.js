import React from 'react'
import Message from './Message'
export default function Messages(props) {
    return (
        <div>
            {props.messages.map(message=> <Message username={message.username} message={message.message} />)}
        </div>
    )
}
// <Message username={props.username} message={message} />