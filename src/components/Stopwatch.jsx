import { useState, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';

const StyledStopwatch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledButtons = styled.button`
  margin: 10px;
  background-color: black;
  border-radius: 0.5rem;
  color: white;
  &:hover {
    background-color: blue;
  }
`;
export default function Stopwatch ({onSet}) {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const stopwatch = useRef();

  useEffect(() => {
    if (isRunning) {
      // milliseconds update
      stopwatch.current = setInterval(() => {
        setElapsedTime(prevTime => prevTime + 100);
      }, 100);
    }

    return () => clearInterval(stopwatch.current);
  }, [isRunning]);

  const handleStartStop = () => {
    console.log('Timer has started or stopped');
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    console.log(stopwatch.current);
    onSet(stopwatch.current);
    setIsRunning(false);
    setElapsedTime(0);
  };

  // seconds given in milliseconds
  const formatTime = (time) => {
    const hours = Math.floor(time / 360000);

    // Minutes calculation
    const minutes = Math.floor((time % 360000) / 6000);

    // Seconds calculation
    const seconds = Math.floor((time % 6000) / 100);

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <StyledStopwatch>
      <h1>{formatTime(elapsedTime)}</h1>
      <div>
        <StyledButtons onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</StyledButtons>
        <StyledButtons onClick={handleReset}>Reset</StyledButtons>
      </div>
    </StyledStopwatch>
  );
};

