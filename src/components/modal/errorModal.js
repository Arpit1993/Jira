import React from "react";
import {
  ErrorBody,
  ErrorRoot,
  ErrorTitle,
  IconWrapper,
  ModalBackground,
} from "./errorModal.style";

export const ErrorModal = (props) => {
  let { errorTitle, errorBody, onClose } = props;
  return (
    <>
      <ModalBackground>
        <ErrorRoot>
          <IconWrapper onClick={() => onClose()}>
            <i class="fa-solid fa-xmark"></i>
          </IconWrapper>
          <ErrorTitle>{errorTitle}</ErrorTitle>
          <ErrorBody>{errorBody}</ErrorBody>
        </ErrorRoot>
      </ModalBackground>
    </>
  );
};
