import React from "react";
import Emoji from "./Emoji";
import Meaning from "./Meaning";

function Card(props) {
  return (
    <div className="term">
      <Emoji emoji={props.emoji} name={props.name} />
      <Meaning meaning={props.meaning} />
    </div>
  );
}

export default Card;
