import React, {useState, useRef, useEffect} from 'react'



export default function InputMessage(props) {

    // Invokes getFocus() on compuonet load
    useEffect(()=>getFocus(), [])

    // State
     const [input, setInput]= useState('')

    // Send messages
    const sendMessage=e=>{
        e.preventDefault()
        props.setMessages([...props.messages, {message: input ,username: props.username}])
        setInput('')
    }

    // Sets focus to textfield on page load
    const getFocus=()=>document.getElementById("myTextField").focus()
    

    return (
        <div>
            {/* Message Input */}
            <form>
                <input 
                    id="myTextField"
                    // Sets value of input to input state hook
                    value= {input}
                    // Links value of input to textfield so it updates while typing
                    onChange={e=> setInput(e.target.value)}/>
                
                {/* Send Button */}
                <button
                    // Disables button if textfield is empty
                    disabled={!input}
                    // Sets button type to submit
                    type={'submit'}
                    // Executes sendMessage function on button press
                    onClick={sendMessage}>Send</button>
            </form>
        </div>
    )
}
