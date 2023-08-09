import React from "react";
import { PreviewButtonComponent } from "../styles/PreviewButtonStyle";
const PreviewButton = ({ onClick }) => {
  return (
    <PreviewButtonComponent onClick={onClick}>Preview</PreviewButtonComponent>
  );
};
export default PreviewButton;
