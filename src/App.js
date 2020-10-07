import React, {useState, useEffect} from 'react';
import './App.css';

// Component Import
import Header from './components/Header'
import Messages from './components/Messages'
import InputMessage from './components/InputMessage'

// State Import
import input from './components/InputMessage'

function App() {

  // State
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')

  // React Hooks
  useEffect(() => {
      setUsername(prompt('Enter a user name'))
  }, [])


  return (
    <div className="App">
      <Header />
      <Messages messages={messages} username={username}/>
      <InputMessage messages={messages} setMessages={setMessages}/>
    </div>
  );
}

export default App;
