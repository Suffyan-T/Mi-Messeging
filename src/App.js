import React, {useState, useEffect} from 'react';
import './App.css';

// Component Import
import Header from './components/Header'
import Messages from './components/Messages'
import InputMessage from './components/InputMessage'

function App() {


  // State
  const [messages, setMessages] = useState([])



  return (
    <div className="App">
      <Header />
      <Messages messages={messages}/>
      <InputMessage messages={messages} setMessages={setMessages}/>
    </div>
  );
}

export default App;
