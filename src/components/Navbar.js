import React from "react";
import { NavbarContainer, Title } from "./NavbarStyle";
const Header = ({ title }) => {
  return (
    <NavbarContainer>
      <Title>{title}</Title>
    </NavbarContainer>
  );
};
export default Header;
