import { useState } from "react";

const useInputfield = (defaultVale) => {
  const [fieldValue, setFieldValue] = useState(defaultVale);

  const handleFieldOnChange = (e) => {
    setFieldValue(e.target.value);
  };
  return [fieldValue, handleFieldOnChange];
};

export default useInputfield;
