import React, { useState } from "react";
import {
  FormAvatar,
  FormAvatarIcon,
  FormContainer,
  FormHeading,
  GridContainer,
  TextInputContainer,
} from "../styles/formStyle";
import skillsIcon from "../assets/creative-thinking.png";
import TextInput from "./TextInput";
import Button from "../styles/Button";
import { useDispatch, useSelector } from "react-redux";
import SkillGridItem from "./SkillGridItem";
import { addSkills } from "../store/action/skillsAction";

const SkillsDetails = () => {
  const skills = useSelector((state) => state.Skill.skill);
  const dispatch = useDispatch();
  const [skill, setSkill] = useState("");

  const addSkill = () => {
    if (skill) {
      dispatch(addSkills([...skills, skill]));
      setSkill("");
    }
  };

  const removeEducationalDetail = (index) => {
    const updatedDetails = skills.filter((_, i) => i !== index);
    dispatch(addSkills(updatedDetails));
  };

  return (
    <FormContainer>
      <FormAvatar>
        <FormAvatarIcon src={skillsIcon} />
        <FormHeading>Skills</FormHeading>
      </FormAvatar>
      <TextInputContainer>
        <TextInput
          value={skill}
          placeholder={"Skill"}
          onChange={(event) => setSkill(event.target.value)}
        />

        <Button $inputColor="teal" onClick={() => addSkill()}>
          ADD
        </Button>
      </TextInputContainer>
      <GridContainer $inputWidth="150px">
        {skills.length !== 0 &&
          skills.map((item, index) => {
            return (
              <SkillGridItem
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

export default SkillsDetails;
