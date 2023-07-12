import React, { useState } from "react";

function SubmitButton() {
  const [isMousedOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }
  return (
    <button
      style={{ backgroundColor: isMousedOver ? "black" : "white" }}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>
      Submit
    </button>
  );
}

export default SubmitButton;
