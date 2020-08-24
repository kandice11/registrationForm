import React from "react";

function login() {
  return (
    <div>
      <h2>Please login!</h2>
      <form className="login">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default login;
