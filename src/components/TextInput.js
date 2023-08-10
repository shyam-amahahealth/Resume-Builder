import React from "react";
import { TextInputFeild } from "../styles/TextInputStyles";
const TextInput = ({ placeholder, value, onChange, type }) => {
  return (
    <TextInputFeild
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
export default TextInput;
