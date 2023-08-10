import styled from "styled-components";
export const GridItem = styled.div`
  border: 2px solid teal;
  padding: 5px;
  border-radius: 5px;
  background-color: lightgray;
  position: relative;
  overflow: hidden;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const DegreeInfo = styled.p`
  margin: 5px 0;
  font-weight: bold;
`;

export const CollegeInfo = styled.p`
  margin: 5px 0;
`;

export const SessionInfo = styled.p`
  margin: 5px 0;
`;
