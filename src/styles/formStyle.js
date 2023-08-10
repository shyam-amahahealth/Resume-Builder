import styled from "styled-components";

export const FormContainer = styled.div`
  width: 80%;
  background-color: orange;
  padding: 20px;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const FormAvatar = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
export const FormAvatarIcon = styled.img`
  height: 30px;
  width: 30px;
`;
export const FormHeading = styled.h2`
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
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 10px;
`;
