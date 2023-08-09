import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  margin: 100px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 110px;
  right: 110px;
  background: none;
  font-weight: bolder;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;
