import React, { useState } from "react";

const ControlledField = () => {
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const handleControlledField = (e) => {
    e.preventDefault();
    console.log(e);
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
  return (
    <div>
      <form onSubmit={handleControlledField}>
        <input type="email" name="email" id="" placeholder="Email" /> <br />
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
