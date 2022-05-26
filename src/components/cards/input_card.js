import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addNewCard, setError } from "../../actions/list";
import { Button } from "../button/button";
import { Input } from "../input/input";
import { InputCardComponent } from "./input_card.style";

const handleAddCard = (params) => {
  let { listIndex, dispatch, titleRef, bodyRef } = params;
  let title = titleRef.current.value;
  let body = bodyRef.current.value;
  if (title === "" && body === "") {
    dispatch(
      setError({
        title: "Error while adding the card",
        message:
          "Please enter both the title and body text in order to add the card",
      })
    );
    return;
  } else if (title === "" && body !== "") {
    dispatch(
      setError({
        title: "Error while adding the card",
        message: "Please enter title in order to add the card",
      })
    );
    return;
  } else if (title !== "" && body === "") {
    dispatch(
      setError({
        title: "Error while adding the card",
        message: "Please enter description in order to add the card",
      })
    );
    return;
  } else {
    titleRef.current.value = "";
    bodyRef.current.value = "";
    dispatch(addNewCard({ listIndex, title, body }));
  }
};

export const InputCard = (props) => {
  const { listIndex } = props;
  const titleRef = useRef(null);
  const bodyRef = useRef(null);
  const dispatch = useDispatch();
  return (
    <>
      <InputCardComponent>
        <Input placeholder={"Enter the heading"} ref={titleRef} />
        <Input placeholder={"Enter the text"} ref={bodyRef} />
      </InputCardComponent>
      <Button
        label={"Add Card"}
        onClickHandler={() =>
          handleAddCard({ listIndex, dispatch, titleRef, bodyRef })
        }
      ></Button>
    </>
  );
};
