import React from 'react';

const Controls = ({ startStop, reset }) => {
  return (
    <div id="controls">
      <button id="start_stop" onClick={startStop}>Start/Stop</button>
      <button id="reset" onClick={reset}>Reset</button>
    </div>
  );
};

export default Controls;