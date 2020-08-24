import React from "react";

function Form() {
  return (
    <div>
      <h2>Please sign up!</h2>
      <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Form;
