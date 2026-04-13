import React from "react";
import useInputfield from "../useInputfield/useInputfield";

const HookForm = () => {
  const [name, nameOnChange] = useInputfield("");
  const [email, emailOnChange] = useInputfield("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subitted", name, email);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input defaultValue={name} type="text" onChange={nameOnChange} />
        <br />
        <input
          type="email"
          onChange={emailOnChange}
          name=""
          defaultValue={email}
          id=""
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
