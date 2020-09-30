import React, {useState, useRef, useEffect} from 'react'



export default function InputMessage(props) {

    useEffect(() => myInput.current && myInput.current.focus(), [])

    

    // State
    const [input, setInput]= useState('')

    // Send messages
    const sendMessage=e=>{
        e.preventDefault()
        props.setMessages([...props.messages, input])
        setInput('')
    }
    

    return (
        <div>
            {/* Message Input */}
            <form>
                <input 
                    // Sets value of input to input variable
                    value= {input}
                    // 
                    onChange={e=> setInput(e.target.value)}/>
                
                {/* Send Button */}
                <button
                type={submit}
                onClick={sendMessage}>Send</button>
            </form>
        </div>
    )
}
