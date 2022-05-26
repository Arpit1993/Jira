import React from "react";
import { useDispatch } from "react-redux";
import { removeCard } from "../../actions/list";
import {
  CardBody,
  CardItem,
  Header,
  HeadingWrapper,
  IconWrapper
} from "./card.style";

const handleDrag = (e, params) => {
  let data = JSON.stringify(params);
  e.dataTransfer.setData("cardMove", data);
};

const handleCardCrossClick = (params) => {
  let { dispatch, cardIndex, listIndex } = params;
  dispatch(removeCard({ cardIndex, listIndex }));
};
export const Card = (props) => {
  const { title, body, cardIndex, listIndex } = props;
  const dispatch = useDispatch();
  return (
    <CardItem
      draggable={true}
      onDragStart={(e) => handleDrag(e, { cardIndex, listIndex })}
    >
      <HeadingWrapper>
        <Header>{title}</Header>
        <IconWrapper
          onClick={() =>
            handleCardCrossClick({ dispatch, listIndex, cardIndex })
          }
        >
           <i class="fa-solid fa-xmark"></i>
        </IconWrapper>
      </HeadingWrapper>
      <CardBody>{body}</CardBody>
    </CardItem>
  );
};
