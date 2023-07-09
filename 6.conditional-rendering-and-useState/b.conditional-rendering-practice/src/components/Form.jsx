import React from "react";
import { userIsRegistered } from "./App";

function Form(props) {
  return (
    <form className="form">
      {/* if registered */}
      {/* show Login as button text */}
      {/* don't show confirm password */}

      {/* else */}
      {/* show Register as button text */}

      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!props.isRegistered && <input type="password" placeholder="Confirm Password" />}
      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
