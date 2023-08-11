import styled from "styled-components";
export const TextareaFeild = styled.textarea`
  font-size: large;
  background-color: ${(props) => (props.isError ? "mistyrose" : "burlywood")};
  border: ${(props) => (props.isError ? "1px solid red" : "none")};
  width: -webkit-fill-available;
  height: 100px;
  border-radius: 10px;
  padding: 10px;
  resize: none;
  margin-bottom: 10px;
`;

export const ErrorText = styled.p`
  color: red;
  font-size: small;
  margin-top: 0px;
  margin-bottom: 2px;
  padding: 0px;
`;
