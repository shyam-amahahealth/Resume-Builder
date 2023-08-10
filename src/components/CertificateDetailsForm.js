import React, { useState } from "react";
import {
  FormAvatar,
  FormAvatarIcon,
  FormContainer,
  FormHeading,
  GridContainer,
  TextInputContainer,
} from "../styles/formStyle";
import CertificateIcon from "../assets/certificate.png";
import TextInput from "./TextInput";
import Button from "../styles/Button";
import { useDispatch, useSelector } from "react-redux";
import { addCertificate } from "../store/action/certificateDetailAction";
import CertificateGridItem from "./CertificateGridItem";

const CertificateDetailsForm = () => {
  const certificateDetails = useSelector(
    (state) => state.CertificateDetail.certificateDetail
  );
  const dispatch = useDispatch();
  const [certificateName, setCertificateName] = useState("");
  const [certificateDetail, setCertificateDetails] = useState("");
  const [certificateDate, setCertificateDate] = useState("");
  const addCertificateDetail = () => {
    if (certificateName && certificateDetail && certificateDate) {
      dispatch(
        addCertificate([
          ...certificateDetails,
          {
            certificateName: certificateName,
            certificateDate: certificateDate,
            certificateDetail: certificateDetail,
          },
        ])
      );
      setCertificateDate("");
      setCertificateDetails("");
      setCertificateName("");
    }
  };

  const removeCertificateDetail = (index) => {
    const updatedDetails = certificateDetails.filter((_, i) => i !== index);
    dispatch(addCertificate(updatedDetails));
  };

  return (
    <FormContainer>
      <FormAvatar>
        <FormAvatarIcon src={CertificateIcon} />
        <FormHeading>Certifications & Courses</FormHeading>
      </FormAvatar>
      <TextInputContainer>
        <TextInput
          value={certificateName}
          placeholder={"Certificate Name"}
          onChange={(event) => setCertificateName(event.target.value)}
        />
        <TextInput
          value={certificateDetail}
          placeholder={"Certificate Detail"}
          onChange={(event) => setCertificateDetails(event.target.value)}
        />
        <TextInput
          type="date"
          value={certificateDate}
          placeholder={"Certificate Date"}
          onChange={(event) => setCertificateDate(event.target.value)}
        />
        <Button $inputColor="teal" onClick={() => addCertificateDetail()}>
          ADD
        </Button>
      </TextInputContainer>
      <GridContainer>
        {certificateDetails.length !== 0 &&
          certificateDetails.map((item, index) => {
            return (
              <CertificateGridItem
                key={index}
                item={item}
                index={index}
                removeCertificateDetail={removeCertificateDetail}
              />
            );
          })}
      </GridContainer>
    </FormContainer>
  );
};

export default CertificateDetailsForm;
