import React from "react";
import {
  CloseButton,
  GridItemHeading,
  GridItem,
} from "../styles/GridItemStyle";

const SkillGridItem = ({ item, index, removeSkillDetail }) => {
  return (
    <GridItem>
      <CloseButton onClick={() => removeSkillDetail(index)}>
        X
      </CloseButton>
      <GridItemHeading>{item}</GridItemHeading>
    </GridItem>
  );
};
export default SkillGridItem;
