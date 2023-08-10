import React, { useState } from "react";
import {
  FormAvatar,
  FormAvatarIcon,
  FormContainer,
  FormHeading,
  GridContainer,
  TextInputContainer,
} from "../styles/formStyle";
import experienceIcon from "../assets/suitcase.png";
import TextInput from "./TextInput";
import Button from "../styles/Button";
import { useDispatch, useSelector } from "react-redux";
import { addExperienceDetailAction } from "../store/action/experienceDetailAction";
import ExperienceGridItem from "./ExperienceGridItem";
import Textarea from "./Textarea";

const ExperienceDetailsForm = () => {
  const experienceDetail = useSelector(
    (state) => state.experienceDetail.experienceDetails
  );
  const dispatch = useDispatch();
  const [companyName, setCompanyName] = useState("");
  const [companyTenure, setCompnayTenure] = useState("");
  const [companyDesignation, setCompanyDesignation] = useState("");
  const [roleInCompany, setRoleInCompany] = useState("");
  const addExperienceDetails = () => {
    if (companyName && companyDesignation && companyTenure && roleInCompany) {
      dispatch(
        addExperienceDetailAction([
          ...experienceDetail,
          {
            companyName: companyName,
            companyTenure: companyTenure,
            roleInCompany: roleInCompany,
            companyDesignation: companyDesignation,
          },
        ])
      );
      setCompanyName("");
      setCompanyDesignation("");
      setCompnayTenure("");
      setRoleInCompany("");
    }
  };

  const removeExperienceDetail = (index) => {
    const updatedDetails = experienceDetail.filter((_, i) => i !== index);
    dispatch(addExperienceDetailAction(updatedDetails));
  };

  return (
    <FormContainer>
      <FormAvatar>
        <FormAvatarIcon src={experienceIcon} />
        <FormHeading>Experience Details</FormHeading>
      </FormAvatar>
      <TextInputContainer>
        <TextInput
          value={companyName}
          placeholder={"Company Name"}
          onChange={(event) => setCompanyName(event.target.value)}
        />
        <TextInput
          value={companyDesignation}
          placeholder={"Designation"}
          onChange={(event) => setCompanyDesignation(event.target.value)}
        />
        <TextInput
          value={companyTenure}
          placeholder={"Tenure"}
          onChange={(event) => setCompnayTenure(event.target.value)}
        />
      </TextInputContainer>
      <TextInputContainer>
        <Textarea
          value={roleInCompany}
          placeholder={"Role in company"}
          onChange={(event) => setRoleInCompany(event.target.value)}
        />
      </TextInputContainer>

      <Button $inputColor="teal" onClick={() => addExperienceDetails()}>
        ADD
      </Button>
      <GridContainer>
        {experienceDetail.length !== 0 &&
          experienceDetail.map((item, index) => {
            return (
              <ExperienceGridItem
                key={index}
                item={item}
                index={index}
                removeExperienceDetail={removeExperienceDetail}
              />
            );
          })}
      </GridContainer>
    </FormContainer>
  );
};

export default ExperienceDetailsForm;
