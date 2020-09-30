import React from 'react';
import './App.css';

// Component Import
import Header from './components/Header'
import Messages from './components/Messages'
import InputMessage from './components/InputMessage'

function App() {
  return (
    <div className="App">
      <Header />
      <Messages />
      <InputMessage />
    </div>
  );
}

export default App;
