import React, { useState, useEffect } from "react";

import { Circle } from "rc-progress";

const Progress = ({ duration }) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    if (time > 0) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [time]);

  const handleAddTime = () => {
    if (time <= 50) {
      setTime((prevTime) => prevTime + 10);
    }
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
      <div className="flex flex-col mt-24 justify-center items-center text-center">
        <h2 className=""> 00:{time}</h2>
        <div className=" h-32 w-32  absolute overflow-visible">
          <Circle
            percent={(time / 60) * 100}
            strokeWidth={4}
            trailWidth={2}
            strokeColor="red"
            value={time}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 p-2 mt-32">
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
