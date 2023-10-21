import React, { useState } from 'react';
import NumberInput from './NumberInput';
import Result from './Result';

function GuessingGame() {
  const [secretNumber] = useState(generateRandomNumber());
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState('');

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleGuess = (userGuess) => {
    const parsedGuess = parseInt(userGuess, 10);
    if (isNaN(parsedGuess)) {
      setFeedback('Please enter a valid number.');
      return;
    }

    setAttempts(attempts + 1);

    if (parsedGuess < secretNumber) {
      setFeedback('Too low. Try a higher number.');
    } else if (parsedGuess > secretNumber) {
      setFeedback('Too high. Try a lower number.');
    } else {
      setFeedback(`Congratulations! You've guessed the number ${secretNumber} in ${attempts} attempts.`);
    }
  };

  return (
    <div>
      <NumberInput onGuess={handleGuess} />
      <Result attempts={attempts} feedback={feedback} />
    </div>
  );
}

export default GuessingGame;
