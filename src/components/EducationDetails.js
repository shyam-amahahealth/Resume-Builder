import React, { useState } from "react";
import {
  FormAvatar,
  FormAvatarIcon,
  FormContainer,
  FormHeading,
  GridContainer,
  TextInputContainer,
} from "../styles/formStyle";
import educationDetailIcon from "../assets/graduation.png";
import TextInput from "./TextInput";
import Button from "../styles/Button";
import { useDispatch, useSelector } from "react-redux";
import { addEducationalDetailAction } from "../store/action/eductionalDetailAction";
import EducationGridItem from "./EducationGridItem";

const EducationDetails = () => {
  const educationalDetails = useSelector((state) => state.EducationDetails);
  const dispatch = useDispatch();
  const [degree, setDegree] = useState("");
  const [college, setCollege] = useState("");
  const [session, setSession] = useState("");
  const AddEducationalDetail = () => {
    if (degree && college && session) {
      dispatch(
        addEducationalDetailAction([
          ...educationalDetails.educationDetail,
          { college: college, degree: degree, session: session },
        ])
      );
      setCollege("");
      setDegree("");
      setSession("");
    }
  };

  const removeEducationalDetail = (index) => {
    const updatedDetails = educationalDetails.educationDetail.filter(
      (_, i) => i !== index
    );
    dispatch(addEducationalDetailAction(updatedDetails));
  };

  return (
    <FormContainer>
      <FormAvatar>
        <FormAvatarIcon src={educationDetailIcon} />
        <FormHeading>Education Details</FormHeading>
      </FormAvatar>
      <TextInputContainer>
        <TextInput
          value={degree}
          placeholder={"Degree"}
          onChange={(event) => setDegree(event.target.value)}
        />
        <TextInput
          value={college}
          placeholder={"College Name"}
          onChange={(event) => setCollege(event.target.value)}
        />
        <TextInput
          value={session}
          placeholder={"Session"}
          onChange={(event) => setSession(event.target.value)}
        />
        <Button $inputColor="teal" onClick={() => AddEducationalDetail()}>
          ADD
        </Button>
      </TextInputContainer>
      <GridContainer>
        {educationalDetails.educationDetail.length !== 0 &&
          educationalDetails.educationDetail.map((item, index) => {
            return (
              <EducationGridItem
                key={index}
                item={item}
                index={index}
                removeEducationalDetail={removeEducationalDetail}
              />
            );
          })}
      </GridContainer>
    </FormContainer>
  );
};

export default EducationDetails;
