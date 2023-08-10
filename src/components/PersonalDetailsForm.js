import React from "react";
import {
  FormAvatar,
  FormAvatarIcon,
  FormContainer,
  FormHeading,
  TextInputContainer,
  TextInputInnerContainer,
} from "../styles/formStyle";
import personalDetailIcon from "../assets/user.png";
import TextInput from "./TextInput";
import Textarea from "./Textarea";
import { useDispatch, useSelector } from "react-redux";
import {
  updateAbout,
  updateAddress,
  updateEmail,
  updateGithub,
  updateName,
  updatePhone,
} from "../store/action/personalDetailActions";
const PersonalDetailsForm = () => {
  const dispatch = useDispatch();
  const personalData = useSelector((state) => state.PersonalDetails);

  return (
    <FormContainer>
      <FormAvatar>
        <FormAvatarIcon src={personalDetailIcon} />
        <FormHeading>Personal Details</FormHeading>
      </FormAvatar>
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
      <TextInputContainer>
        <TextInput
          value={personalData.about}
          placeholder={"About you in short"}
          onChange={(event) => dispatch(updateAbout(event.target.value))}
        />
      </TextInputContainer>
    </FormContainer>
  );
};
export default PersonalDetailsForm;
