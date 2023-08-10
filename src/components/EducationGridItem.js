import React from "react";
import { CloseButton, DegreeInfo, GridItem, SessionInfo } from "../styles/GridItemStyle";

const EducationGridItem = ({ item, index, removeEducationalDetail }) => {
  return (
    <GridItem>
      <CloseButton onClick={() => removeEducationalDetail(index)}>X</CloseButton>
      <DegreeInfo>
        {item.degree} from {item.college}
      </DegreeInfo>
      <SessionInfo>{item.session}</SessionInfo>
    </GridItem>
  );
};
export default EducationGridItem;