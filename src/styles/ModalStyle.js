import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  margin: 5% auto;
  max-width: 90%;
  max-height: 90%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 6%;
  background: none;
  font-weight: bolder;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const ResumeContainer = styled.div`
  padding: 60px;
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

export const DetailedContainer = styled.div`
  flex: 1;
`;

export const NormalContainer = styled.div`
  flex-direction: column;
  width: 40%;
`;

export const Name = styled.h1`
  font-size: 50px;
  margin: 2px;
  padding: 0px;
`;

export const Text = styled.p`
  margin: 2px;
  padding: 0px;
  text-align: justify;
  font-size: 20px;
`;

export const ResumeHeading = styled.h2`
  color: blue;
`;
export const InnerContainer = styled.div`
  margin-top: 80px;
`;
export const ExperienceContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;
export const ExperienceHeading = styled.div`
  display: flex;
  align-items: center;
  margin: 0px;
  gap: 10px;
  padding: 0px;
`;
export const CompanyName = styled.h2`
  font-weight: bolder;
  font-size: 26px;
  margin: 0px;
  padding: 0px;
`;
export const MyProfile = styled.h1`
  font-weight: bolder;
  font-size: 20px;
  margin: 0px;
  padding: 0px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
