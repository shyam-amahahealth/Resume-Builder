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
import { useDispatch, useSelector } from "react-redux";
import {
  updateAddress,
  updateEmail,
  updateGithub,
  updateName,
  updatePhone,
} from "../store/action/personalDetailActions";
const PersonalDetails = () => {
  const dispatch = useDispatch();
  const personalData = useSelector((state) => state.PersonalDetails);

  return (
    <PersonalDetailsContainer>
      <PersonalDetailAvatar>
        <PersonalDetailIcon src={personalDetailIcon} />
        <PersonalDetailHeading>Personal Details</PersonalDetailHeading>
      </PersonalDetailAvatar>
      <TextInputContainer>
        <TextInputInnerContainer>
          <TextInput
            value={personalData.name}
            placeholder={"Name"}
            onChange={(event) => dispatch(updateName(event.target.value))}
          />
          <Textarea
            value={personalData.address}
            placeholder={"Address"}
            onChange={(event) => dispatch(updateAddress(event.target.value))}
          />
        </TextInputInnerContainer>
        <TextInputInnerContainer>
          <TextInput
            value={personalData.email}
            placeholder={"Email"}
            onChange={(event) => dispatch(updateEmail(event.target.value))}
          />
          <TextInput
            value={personalData.phone}
            placeholder={"Phone No"}
            onChange={(event) => dispatch(updatePhone(event.target.value))}
          />
          <TextInput
            value={personalData.github}
            placeholder={"GitHub"}
            onChange={(event) => dispatch(updateGithub(event.target.value))}
          />
        </TextInputInnerContainer>
      </TextInputContainer>
    </PersonalDetailsContainer>
  );
};
export default PersonalDetails;
