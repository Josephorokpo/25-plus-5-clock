import React from 'react';

const SessionControl = ({ sessionLength, incrementSession, decrementSession }) => {
  return (
    <div id="session">
      <h2 id="session-label">Session Length</h2>
      <button id="session-decrement" onClick={decrementSession}>-</button>
      <span id="session-length">{sessionLength}</span>
      <button id="session-increment" onClick={incrementSession}>+</button>
    </div>
  );
};

export default SessionControl;