import React, { useState } from "react";

const ControlledField = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  const handleControlledField = (e) => {
    e.preventDefault();
    console.log(email, password, name);
    if (password.length < 6) {
      setError("Password must be 6 characters longer");
    } else {
      setError("");
    }
  };
  const handlePasswordOnChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
    // if (password.length < 6) {
    //   setError("Password must be 6 characters longer");
    // } else {
    //   setError("");
    // }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const textHandleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleControlledField}>
        {" "}
        br
        <input type="text" onChange={textHandleChange} /> <br />
        <input
          onChange={handleEmailChange}
          type="email"
          name="email"
          id=""
          placeholder="Email"
        />{" "}
        <br />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
          defaultValue={password}
          onChange={handlePasswordOnChange}
        />{" "}
        <br />
        <input type="submit" value="Submit" />
      </form>

      <p>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ControlledField;
