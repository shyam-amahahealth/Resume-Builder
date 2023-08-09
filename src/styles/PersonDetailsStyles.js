import styled from "styled-components";

export const PersonalDetailsContainer = styled.div`
  width: 80%;
  background-color: orange;
  padding: 20px;
  border-radius: 10px;
`;
export const PersonalDetailAvatar = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
export const PersonalDetailIcon = styled.img`
  height: 30px;
  width: 30px;
`;
export const PersonalDetailHeading = styled.h2`
  font-family: cursive;
  font-weight: bolder;
  font-size: 24px;
`;
export const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const TextInputInnerContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
