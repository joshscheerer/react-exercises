import React, { useState, useRef } from "react";
import getTime from "../get-time";
import Time from "./Time";

function App() {
  const [time, setTime] = useState(getTime());

  // solution 2
  const [autoTime, setAutoTime] = useState(null);

  function startAuto() {
    if (autoTime != null) return;
    const intervalId = setInterval(() => {
      setTime(getTime());
    }, 1000);
    setAutoTime(intervalId);
  }

  function endAuto() {
    clearInterval(autoTime);
    setAutoTime(null);
  }
  // end solution 2

  return (
    <div className="container">
      <Time time={time} />
      {/* Solution 1 */}
      <button onClick={() => setTime(getTime())}>Get Time</button>
      {/* Solution 2 */}
      <button onClick={startAuto}>Start Auto Time</button>
      <button onClick={endAuto}>End Auto Time</button>
    </div>
  );
}

export default App;
