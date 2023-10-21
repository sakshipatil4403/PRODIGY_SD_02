import React from 'react';
import './App.css'; // You can add CSS styling for your app in App.css
import GuessingGame from './GuessingGame';

function App() {
  return (
    <div className="App">
      <h1>Guess the Number Game</h1>
      <GuessingGame />
    </div>
  );
}

export default App;
