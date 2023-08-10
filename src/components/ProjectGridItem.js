import React from "react";
import {
  CloseButton,
  DegreeInfo,
  GridItem,
  SessionInfo,
} from "../styles/GridItemStyle";

const ProjectGridItem = ({ item, index, removeEducationalDetail }) => {
  return (
    <GridItem>
      <CloseButton onClick={() => removeEducationalDetail(index)}>
        X
      </CloseButton>
      <DegreeInfo>{item.project}</DegreeInfo>
      <SessionInfo>{item.projectDescription}</SessionInfo>
    </GridItem>
  );
};
export default ProjectGridItem;
