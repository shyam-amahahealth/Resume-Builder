import React from "react";
import { TextareaFeild, ErrorText } from "../styles/TextareaStyles";
const Textarea = ({ placeholder, value, onChange, type, error }) => {
  return (
    <>
      <TextareaFeild
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        isError={error}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </>
  );
};

export default Textarea;
