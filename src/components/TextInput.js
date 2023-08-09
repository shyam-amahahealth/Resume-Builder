import React from "react";
import { TextInputFeild } from "../styles/TextInputStyles";
const TextInput = ({ placeholder, value, onChange }) => {
  return (
    <TextInputFeild
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
export default TextInput;
