import React from "react";
import { NavbarContainer, Title } from "../styles/NavbarStyle";
const Header = ({ title }) => {
  return (
    <NavbarContainer>
      <Title>{title}</Title>
    </NavbarContainer>
  );
};
export default Header;
