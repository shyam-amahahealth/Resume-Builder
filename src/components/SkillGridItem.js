import React from "react";
import {
  CloseButton,
  DegreeInfo,
  GridItem,
} from "../styles/GridItemStyle";

const SkillGridItem = ({ item, index, removeEducationalDetail }) => {
  return (
    <GridItem>
      <CloseButton onClick={() => removeEducationalDetail(index)}>
        X
      </CloseButton>
      <DegreeInfo>{item}</DegreeInfo>
    </GridItem>
  );
};
export default SkillGridItem;
