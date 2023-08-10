import React from "react";
import {
  CloseButton,
  GridItemHeading,
  GridItem,
  GridItemSubHeading,
} from "../styles/GridItemStyle";

const ProjectGridItem = ({ item, index, removeProjectDetail }) => {
  return (
    <GridItem>
      <CloseButton onClick={() => removeProjectDetail(index)}>
        X
      </CloseButton>
      <GridItemHeading>{item.project}</GridItemHeading>
      <GridItemSubHeading>{item.projectDescription}</GridItemSubHeading>
    </GridItem>
  );
};
export default ProjectGridItem;
