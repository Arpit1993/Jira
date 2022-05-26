import styled from "@emotion/styled";

export const ErrorTitle = styled.h3`
  color: red;
  text-align: center;
`;

export const ErrorBody = styled.p`
  color: red;
  text-align: center;
  padding: 1rem 0 0 0;
`;

export const ErrorRoot = styled.section`
  width: 500px;
  max-height: 500px;
  background-color: #ffffff;
  z-index: 2;
  padding: 16px;
`;

export const IconWrapper = styled.section`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

export const ModalBackground = styled.section`
  position: fixed;
  background-color: rgb(218, 210, 210, 0.7);
  z-index: 1;
  width: 100vw;
  height: 100vh;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
