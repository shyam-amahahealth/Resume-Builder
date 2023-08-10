import React from "react";
import {
  CloseButton,
  GridItemHeading,
  GridItem,
  GridItemSubHeading,
} from "../styles/GridItemStyle";

const CertificateGridItem = ({ item, index, removeCertificateDetail }) => {
  return (
    <GridItem>
      <CloseButton onClick={() => removeCertificateDetail(index)}>
        X
      </CloseButton>
      <GridItemHeading>{item.certificateName}</GridItemHeading>
      <GridItemSubHeading>{item.certificateDetail}</GridItemSubHeading>
      <GridItemSubHeading>{item.certificateDate}</GridItemSubHeading>
    </GridItem>
  );
};
export default CertificateGridItem;
