import React from "react";
import { TextInputFeild, ErrorText } from "../styles/TextInputStyles";

const TextInput = ({ placeholder, value, onChange, type, error }) => {
  return (
    <>
      <TextInputFeild
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

export default TextInput;
