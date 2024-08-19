import React, { useState, useEffect } from 'react';
import BreakControl from './components/BreakControl';
import SessionControl from './components/SessionControl';
import Timer from './components/Timer';
import Controls from './components/Controls';

const App = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isSession, setIsSession] = useState(true);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime > 0 ? prevTime - 1 : 0);
      }, 1000);
    } else if (!isRunning && timeLeft !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    setTimeLeft(sessionLength * 60);
  }, [sessionLength]);

  const incrementBreak = () => {
    setBreakLength((prev) => prev < 60 ? prev + 1 : prev);
  };

  const decrementBreak = () => {
    setBreakLength((prev) => prev > 1 ? prev - 1 : prev);
  };

  const incrementSession = () => {
    setSessionLength((prev) => prev < 60 ? prev + 1 : prev);
  };

  const decrementSession = () => {
    setSessionLength((prev) => prev > 1 ? prev - 1 : prev);
  };

  const startStop = () => {
    setIsRunning((prev) => !prev);
  };

  const reset = () => {
    setIsRunning(false);
    setBreakLength(5);
    setSessionLength(25);
    setTimeLeft(25 * 60);
    setIsSession(true);
  };

  return (
    <div className="App">
      <BreakControl
        breakLength={breakLength}
        incrementBreak={incrementBreak}
        decrementBreak={decrementBreak}
      />
      <SessionControl
        sessionLength={sessionLength}
        incrementSession={incrementSession}
        decrementSession={decrementSession}
      />
      <Timer timeLeft={timeLeft} isSession={isSession} />
      <Controls startStop={startStop} reset={reset} />
      <audio id="beep" src="beep-sound-url" />
    </div>
  );
};

export default App;