import React from "react";
import { CloseButton, GridItemHeading, GridItem, GridItemSubHeading } from "../styles/GridItemStyle";

const EducationGridItem = ({ item, index, removeEducationalDetail }) => {
  return (
    <GridItem>
      <CloseButton onClick={() => removeEducationalDetail(index)}>X</CloseButton>
      <GridItemHeading>
        {item.degree} from {item.college}
      </GridItemHeading>
      <GridItemSubHeading>{item.session}</GridItemSubHeading>
    </GridItem>
  );
};
export default EducationGridItem;