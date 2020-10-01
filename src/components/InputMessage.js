import React, {useState, useRef, useEffect} from 'react'



export default function InputMessage(props) {

    useEffect(()=>getFocus(), [])

    // State
    const [input, setInput]= useState('')

    // Send messages
    const sendMessage=e=>{
        e.preventDefault()
        props.setMessages([...props.messages, input])
        setInput('')
    }

    const getFocus=()=>document.getElementById("myTextField").focus()
    

    return (
        <div>
            {/* Message Input */}
            <form>
                <input 
                    id="myTextField"
                    // inputRef={input => input && input.focus()}
                    // Sets value of input to input variable
                    value= {input}
                    // 
                    onChange={e=> setInput(e.target.value)}/>
                
                {/* Send Button */}
                <button
                    disabled={!input}
                    type={'submit'}
                    onClick={sendMessage}>Send</button>
            </form>
        </div>
    )
}
