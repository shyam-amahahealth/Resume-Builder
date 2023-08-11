import styled from "styled-components";

export const TextInputFeild = styled.input`
  font-size: large;
  background-color: ${(props) => (props.isError ? "mistyrose" : "burlywood")};
  border: ${(props) => (props.isError ? "1px solid red" : "none")};
  width: -webkit-fill-available;
  height: 40px;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const ErrorText = styled.p`
  color: red;
  font-size: small;
  margin-top: 4px;
`;
