import React, { useState, useEffect } from "react";
import "./progress.css";

const Progress = ({ duration }) => {
  const [time, setTime] = useState(duration);
  const calculateProgress = () => {
    return (time / duration) * 100;
  };

  useEffect(() => {
    if (time > 0) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [time]);

  const handleAddTime = () => {
    setTime((prevTime) => prevTime + 10);
  };

  const handleSkipTime = () => {
    setTime((prevTime) => prevTime - 5);
  };

  const handleRestart = () => {
    setTime(60);
  };

  const handleClear = () => {
    setTime(0);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center">
        <svg className="circle-countdown-svg" viewBox="0 0 100 100">
          <circle className="circle-countdown-path" cx="50" cy="50" r="45" />
          <circle
            className="circle-countdown-fill"
            cx="50"
            cy="50"
            r="45"
            style={{
              strokeDashoffset: `${calculateProgress()}px`,
              animationDuration: `${duration}s`,
            }}
          />
        </svg>
        <h2>Countdown Timer:</h2>
        <h2> 00:{time} seconds</h2>
      </div>

      <div className="grid grid-cols-2 p-2">
        <button
          className="p-2 m-2 bg-blue-500 text-white font-semibold "
          onClick={handleAddTime}
        >
          Add 10 seconds
        </button>
        <button
          className="p-2 m-2 bg-blue-500 text-white font-semibold "
          onClick={handleSkipTime}
        >
          Skip 5 seconds
        </button>
        <button
          className="p-2 m-2 bg-blue-500 text-white font-semibold "
          onClick={handleRestart}
        >
          Restart
        </button>
        <button
          className="p-2 m-2 bg-blue-500 text-white font-semibold "
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Progress;
