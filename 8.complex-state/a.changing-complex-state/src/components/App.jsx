import React, { useState } from "react";

function App() {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");

  //   function handleFC(event) {
  //     setFirstName(event.target.value);
  //   }

  //   function handleLC(event) {
  //     setLastName(event.target.value);
  //   }
  const [name, setName] = useState({
    first: "",
    last: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setName((prevValue) => {
      if (name === "fName") {
        return {
          first: value,
          last: prevValue.last,
        };
      } else if (name === "lName") {
        return {
          first: prevValue.first,
          last: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {name.first} {name.last}
      </h1>
      <form>
        <input name="fName" placeholder="First Name" onChange={handleChange} value={name.first} />
        <input name="lName" placeholder="Last Name" onChange={handleChange} value={name.last} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
