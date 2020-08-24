import React from "react";
import Input from "./input";

function Login() {
  return (
    <div className="container">
      <h1>Hello</h1>
      <form className="form">
        <Input />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
