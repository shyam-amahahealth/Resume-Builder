import React from "react";
import {
  ButtonContainer,
  CloseButton,
  CompanyName,
  DetailedContainer,
  ExperienceContainer,
  ExperienceHeading,
  InnerContainer,
  ModalContent,
  ModalOverlay,
  MyProfile,
  Name,
  NormalContainer,
  ResumeContainer,
  ResumeHeading,
  Text,
} from "../styles/ModalStyle";
import { useSelector } from "react-redux";
import Button from "../styles/Button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Modal = ({ isOpen, onClose }) => {
  const personalDetail = useSelector((state) => state.PersonalDetails);
  const EducationDetails = useSelector(
    (state) => state.EducationDetails.educationDetail
  );
  const Skill = useSelector((state) => state.Skill.skill);
  const ProjectDetail = useSelector(
    (state) => state.ProjectDetail.projectDetail
  );
  const CertificateDetail = useSelector(
    (state) => state.CertificateDetail.certificateDetail
  );
  const experienceDetail = useSelector(
    (state) => state.experienceDetail.experienceDetails
  );

  const generatePDF = () => {
    const divToPrint = document.getElementById("resume");

    html2canvas(divToPrint).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const width = pdf.internal.pageSize.getWidth();
      const height = (imgProps.height * width) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      pdf.save("resume.pdf");
    });
  };

  if (!isOpen) return null;
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <ResumeContainer id="resume">
          <DetailedContainer>
            <Name>{personalDetail.name}</Name>
            <Text>{personalDetail.about}</Text>
            <InnerContainer>
              <ResumeHeading>Experience</ResumeHeading>
              {experienceDetail.map((item, index) => {
                return (
                  <ExperienceContainer>
                    <ExperienceHeading>
                      <CompanyName>{item.companyName}</CompanyName>
                      <CompanyName>-</CompanyName>
                      <MyProfile> {item.companyDesignation}</MyProfile>
                    </ExperienceHeading>
                    (<span>{item.companyTenure}</span>)
                    <Text>{item.roleInCompany}</Text>
                  </ExperienceContainer>
                );
              })}
            </InnerContainer>
            <InnerContainer>
              <ResumeHeading>Education</ResumeHeading>
              {EducationDetails.map((item, index) => {
                return (
                  <ExperienceContainer>
                    <ExperienceHeading>
                      <CompanyName>{item.college}</CompanyName>
                      <CompanyName>-</CompanyName>
                      <MyProfile> {item.degree}</MyProfile>
                    </ExperienceHeading>
                    <Text>Session from {item.session}</Text>
                  </ExperienceContainer>
                );
              })}
            </InnerContainer>

            <InnerContainer>
              <ResumeHeading>Projects</ResumeHeading>
              {ProjectDetail.map((item, index) => {
                return (
                  <ExperienceContainer>
                    <ExperienceHeading>
                      <CompanyName>{item.project}</CompanyName>
                    </ExperienceHeading>
                    <Text>{item.projectDescription}</Text>
                  </ExperienceContainer>
                );
              })}
            </InnerContainer>
          </DetailedContainer>
          <NormalContainer>
            <Text> {personalDetail.address}</Text>
            <Text> {personalDetail.phone}</Text>
            <a href={personalDetail.github}> {personalDetail.github}</a>
            <InnerContainer>
              <ResumeHeading>Skills</ResumeHeading>
              {Skill.map((item, index) => {
                return <Text key={index}>{item}</Text>;
              })}
            </InnerContainer>
            <InnerContainer>
              <ResumeHeading>Awards</ResumeHeading>
              {CertificateDetail.map((item, index) => {
                return (
                  <Text key={index}>
                    {item.certificateName} - {item.certificateDetail} in{" "}
                    {item.certificateDate}
                  </Text>
                );
              })}
            </InnerContainer>
          </NormalContainer>
        </ResumeContainer>
        <ButtonContainer>
          <Button onClick={generatePDF}>Download</Button>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
