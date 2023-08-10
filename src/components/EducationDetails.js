import React from "react";
import {
  FormAvatar,
  FormAvatarIcon,
  FormContainer,
  FormHeading,
  TextInputContainer,
} from "../styles/formStyle";
import educationDetailIcon from "../assets/graduation.png";
import TextInput from "./TextInput";
import Button from "../styles/Button";

const EducationDetails = () => {
  return (
    <FormContainer>
      <FormAvatar>
        <FormAvatarIcon src={educationDetailIcon} />
        <FormHeading>Education Details</FormHeading>
      </FormAvatar>
      <TextInputContainer>
        <TextInput placeholder={"Degree"} />
        <TextInput placeholder={"College Name"} />
        <TextInput placeholder={"Session"} />
        <Button $inputColor="teal">ADD</Button>
      </TextInputContainer>
    </FormContainer>
  );
};
export default EducationDetails;
