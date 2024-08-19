import React from 'react';

const BreakControl = ({ breakLength, incrementBreak, decrementBreak }) => {
  return (
    <div id="break">
      <h2 id="break-label">Break Length</h2>
      <button id="break-decrement" onClick={decrementBreak}>-</button>
      <span id="break-length">{breakLength}</span>
      <button id="break-increment" onClick={incrementBreak}>+</button>
    </div>
  );
};

export default BreakControl;
