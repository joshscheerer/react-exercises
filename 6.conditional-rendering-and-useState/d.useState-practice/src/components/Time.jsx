import React from "react";

function Time(props) {
  return <h1 onLoad={props.updateTime}>{props.time}</h1>;
}

export default Time;
