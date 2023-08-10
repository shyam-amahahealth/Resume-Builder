import React from "react";
import { CloseButton, GridItemHeading, GridItem, GridItemSubHeading } from "../styles/GridItemStyle";

const ExperienceGridItem = ({ item, index, removeExperienceDetail }) => {
  return (
    <GridItem>
      <CloseButton onClick={() => removeExperienceDetail(index)}>X</CloseButton>
      <GridItemHeading>
        {item.companyName}-{item.companyDesignation}
      </GridItemHeading>
      <GridItemSubHeading>{item.companyTenure}</GridItemSubHeading>
      <GridItemSubHeading>{item.roleInCompany}</GridItemSubHeading>
    </GridItem>
  );
};
export default ExperienceGridItem;