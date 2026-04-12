import React, { useState } from "react";

const ControlledField = () => {
  const [password, setPassword] = useState("");
  const handleControlledField = (e) => {
    console.log(e);
  };
  const handlePasswordOnChange = (e) => {
    console.log(e.target.value);
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
    </div>
  );
};

export default ControlledField;
