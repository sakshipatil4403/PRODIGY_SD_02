import React from 'react';

function Result({ attempts, feedback }) {
  return (
    <div>
      <p>{feedback}</p>
      <p>Number of attempts: {attempts}</p>
    </div>
  );
}

export default Result;
