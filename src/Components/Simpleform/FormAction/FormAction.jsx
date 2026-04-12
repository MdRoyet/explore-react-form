import React from "react";

const FormAction = () => {
  const handleformAction = (formData) => {
    console.log(formData.get("name"));
    console.log(formData.get("email"));
  };
  return (
    <div>
      <form action={handleformAction}>
        <input type="text" placeholder="name" name="name" /> <br />
        <input type="email" name="email" placeholder="Email" /> <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormAction;
