import styled from "styled-components";

const Button = styled.button`
  width: 200px;
  height: 60px;
  background-color: ${(props) => props.$inputColor || "darkgreen"};
  color: white;
  border: none;
  border-radius: 10px;
  font-size: larger;
  font-weight: bolder;
`;

export default Button;
