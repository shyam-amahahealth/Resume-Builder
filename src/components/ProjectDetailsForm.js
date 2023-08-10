import React, { useState } from "react";
import {
  FormAvatar,
  FormAvatarIcon,
  FormContainer,
  FormHeading,
  GridContainer,
  TextInputContainer,
  TextInputInnerContainer,
} from "../styles/formStyle";
import projectIcon from "../assets/project.png";
import TextInput from "./TextInput";
import Button from "../styles/Button";
import { useDispatch, useSelector } from "react-redux";
import { addProjectDetails } from "../store/action/projectDetailsAction";
import ProjectGridItem from "./ProjectGridItem";
import Textarea from "./Textarea";

const ProjectDetailsForm = () => {
  const projectDetail = useSelector(
    (state) => state.ProjectDetail.projectDetail
  );
  const dispatch = useDispatch();
  const [project, setProject] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const addProjectDetail = () => {
    if (project && projectDescription) {
      dispatch(
        addProjectDetails([
          ...projectDetail,
          { project: project, projectDescription: projectDescription },
        ])
      );
      setProject("");
      setProjectDescription("");
    }
  };

  const removeProjectDetail = (index) => {
    const updatedDetails = projectDetail.filter((_, i) => i !== index);
    dispatch(addProjectDetails(updatedDetails));
  };

  return (
    <FormContainer>
      <FormAvatar>
        <FormAvatarIcon src={projectIcon} />
        <FormHeading>Projects</FormHeading>
      </FormAvatar>
      <TextInputContainer>
        <TextInputInnerContainer>
          <TextInput
            value={project}
            placeholder={"Project Name"}
            onChange={(event) => setProject(event.target.value)}
          />
          <Textarea
            value={projectDescription}
            placeholder={"Project description"}
            onChange={(event) => setProjectDescription(event.target.value)}
          />
          <Button $inputColor="teal" onClick={() => addProjectDetail()}>
            ADD
          </Button>
        </TextInputInnerContainer>
      </TextInputContainer>
      <GridContainer $inputWidth="400px">
        {projectDetail.length !== 0 &&
          projectDetail.map((item, index) => {
            return (
              <ProjectGridItem
                key={index}
                item={item}
                index={index}
                removeProjectDetail={removeProjectDetail}
              />
            );
          })}
      </GridContainer>
    </FormContainer>
  );
};

export default ProjectDetailsForm;
