import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [listItems, setListItems] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setInputText(value);
  }

  function handleClick() {
    setListItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
