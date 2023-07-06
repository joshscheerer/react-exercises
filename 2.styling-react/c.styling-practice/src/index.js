import React from "react";
import ReactDOM from "react-dom";

const time = new Date().getHours();
let greeting;
const timeStyle = {
  color: ""
};

if (time < 12) {
  greeting = "Good Morning";
  timeStyle.color = "red";
} else if (time < 18) {
  greeting = "Good Afternoon";
  timeStyle.color = "green";
} else {
  greeting = "Good Night";
  timeStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={timeStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
