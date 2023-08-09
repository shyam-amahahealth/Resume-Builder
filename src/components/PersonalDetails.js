import React from "react";
import {
  PersonalDetailAvatar,
  PersonalDetailHeading,
  PersonalDetailIcon,
  PersonalDetailsContainer,
  TextInputContainer,
  TextInputInnerContainer,
} from "../styles/PersonDetailsStyles";
import personalDetailIcon from "../assets/user.png";
import TextInput from "./TextInput";
import Textarea from "./Textarea";
const PersonalDetails = () => {
  return (
    <PersonalDetailsContainer>
      <PersonalDetailAvatar>
        <PersonalDetailIcon src={personalDetailIcon} />
        <PersonalDetailHeading>Personal Details</PersonalDetailHeading>
      </PersonalDetailAvatar>
      <TextInputContainer>
        <TextInputInnerContainer>
          <TextInput placeholder={"Name"} />
          <Textarea placeholder={"Address"} />
        </TextInputInnerContainer>
        <TextInputInnerContainer>
          <TextInput placeholder={"Email"} />
          <TextInput placeholder={"Phone No"} />
          <TextInput placeholder={"GitHub"} />
        </TextInputInnerContainer>
      </TextInputContainer>
    </PersonalDetailsContainer>
  );
};
export default PersonalDetails;
