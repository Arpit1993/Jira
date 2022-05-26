import React, { forwardRef } from "react";
import { InputElement } from "./input.style";

export const Input = forwardRef((props, ref) => {
  const { placeholder, style } = props;
  return <InputElement style={style} placeholder={placeholder} ref={ref} />;
});
