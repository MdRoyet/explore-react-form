import React from "react";

const Simpleform = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Input Your Email"
        />{" "}
        <br />
        <input type="submit" value="Submit" />
        <br />
      </form>
    </div>
  );
};

export default Simpleform;
