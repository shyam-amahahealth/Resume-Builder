import React from "react";
import { TextareaFeild } from "../styles/TextareaStyles";
const Textarea = ({ placeholder, value, onChange }) => {
  return (
    <TextareaFeild
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
export default Textarea;
