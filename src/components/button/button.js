import React from "react";
import { ButtonComponent } from "./button.style";

export const Button = (props) => {
  const { label = "default", onClickHandler } = props;
  return <ButtonComponent onClick={onClickHandler}>{label}</ButtonComponent>;
};
