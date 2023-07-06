import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import createCard from "../create-card"

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
