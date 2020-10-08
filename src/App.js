import React, {useState, useEffect} from 'react';
import './App.css';

// Component Import
import Header from './components/Header'
import Messages from './components/Messages'
import InputMessage from './components/InputMessage'
import db from './firebase';


function App() {

  // State
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')
  console.log(messages)
  // React Hooks

    // Prompts user to enter Username
    useEffect(() => {
        setUsername(prompt('Enter a user name'))
    }, [])

    // Pulls data from firestore 
    useEffect(() => {
      db.collection('messages').onSnapshot(snap=>{
        setMessages(snap.docs.map(doc=>doc.data()))
      })
    }, [])


  return (
    <div className="App">
      <Header />
      <Messages messages={messages} username={username}/>
      <InputMessage messages={messages} setMessages={setMessages} username={username}/>
    </div>
  );
}

export default App;
