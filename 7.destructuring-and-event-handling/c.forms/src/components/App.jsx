import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function updateName(event) {
    setHeadingText(name);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={updateName}>
        <input type="text" placeholder="What's your name?" onChange={handleChange} value={name} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
