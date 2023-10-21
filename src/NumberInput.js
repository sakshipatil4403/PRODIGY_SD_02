import React, { useState } from 'react';

function NumberInput({ onGuess }) {
  const [userGuess, setUserGuess] = useState('');

  const handleInputChange = (e) => {
    setUserGuess(e.target.value);
  };

  const handleGuess = () => {
    onGuess(userGuess);
  };

  return (
    <div>
      <input
        type="number"
        value={userGuess}
        onChange={handleInputChange}
      />
      <button onClick={handleGuess}>Guess</button>
    </div>
  );
}

export default NumberInput;
