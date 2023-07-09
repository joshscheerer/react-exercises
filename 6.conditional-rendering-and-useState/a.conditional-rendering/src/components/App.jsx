import React from "react";
import Login from "./Login";

let isLoggedIn = false;

const currentTime = new Date().getHours();

function App() {
  return (
    <div className="container">
      {
        // Ternary
        // isLoggedIn ? <h1>Hello</h1> : <Login />
        // && operator
        // currentTime > 12 && <h1>Why are you still working?</h1>
      }
    </div>
  );
}

export default App;
