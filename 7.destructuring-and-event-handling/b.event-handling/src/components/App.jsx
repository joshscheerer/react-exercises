import React, { useState } from "react";
import SubmitButton from "./SubmitButton";

function App() {
  const [headingText, setHeadingText] = useState("Hello");

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <SubmitButton />
    </div>
  );
}

export default App;
