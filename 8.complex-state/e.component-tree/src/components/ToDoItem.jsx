// import React, { useState } from "react";

// function ToDoItem(props) {
//   const [strike, setStrike] = useState(false);

//   function complete() {
//     setStrike(!strike);
//   }

//   return (
//     <div>
//       <li onClick={complete} style={{ textDecoration: strike && "line-through" }}>
//         {props.text}
//       </li>
//     </div>
//   );
// }

// export default ToDoItem;

import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}>
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
