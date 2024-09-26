import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import "./Authenticate.css";

function Authenticate() {
  const [active, setActive] = useState("login");

  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };

  return (
    <div className="authenticate">
      {active === "login" ? <Login /> : <Signup />}
      <button onClick={handleChange}>
        {active === "login" ? "Sign Up" : "Log In"}
      </button>
    </div>
  );
}

export default Authenticate;
