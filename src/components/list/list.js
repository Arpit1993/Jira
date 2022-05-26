import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addNewList, removeList, cardMove, setError } from "../../actions/list";
import { Button } from "../button/button";
import { Card } from "../cards/card";
import { InputCard } from "../cards/input_card";
import { Input } from "../input/input";
import {
  ListColumn,
  ListHeaderContainer,
  ListHeader,
  IconWrapper,
  Image,
} from "./list.style";

const allowDrop = (ev) => {
  ev.preventDefault();
};

const drop = (ev, params) => {
  ev.preventDefault();
  let data = JSON.parse(ev.dataTransfer.getData("cardMove"));
  let { cardIndex, listIndex } = data;
  let { dispatch, listIndex: presentListIndex } = params;
  let indexOfListToRemoveFrom = listIndex;
  let cardToBeRemovedFromList = cardIndex;
  let indexOfListToAddCard = presentListIndex;

  dispatch(
    cardMove({
      indexOfListToAddCard,
      cardToBeRemovedFromList,
      indexOfListToRemoveFrom,
    })
  );
};

const handleAddList = (ref, dispatch) => {
  let heading = ref.current.value;
  if (heading === "") {
    dispatch(
      setError({
        title: "Error while adding list",
        message: "Please enter the title in order to add the list",
      })
    );
  } else {
    ref.current.value = "";
    dispatch(addNewList(heading));
  }
};

const handleListCrossClick = (params) => {
  let { dispatch, listIndex } = params;
  dispatch(removeList({ listIndex }));
};

export const List = (props) => {
  const { listHeading, cards, listIndex } = props;
  const headingRef = useRef(null);
  const dispatch = useDispatch();
  const showListContent = listHeading ? true : false;
  const showCards = cards?.length ? true : false;
  return (
    <ListColumn
      onDrop={(event) => drop(event, { dispatch, listIndex })}
      onDragOver={(event) => allowDrop(event)}
    >
      {showListContent && (
        <ListHeaderContainer>
          <ListHeader>{listHeading}</ListHeader>
          <IconWrapper
            onClick={() => handleListCrossClick({ dispatch, listIndex })}
          >
            <i class="fa-solid fa-xmark"></i>
          </IconWrapper>
        </ListHeaderContainer>
      )}
      {!showListContent && (
        <>
          <Input ref={headingRef} style={{ marginRight: "8px" }} />
          <Button
            label="Add List"
            onClickHandler={() => handleAddList(headingRef, dispatch)}
          ></Button>
        </>
      )}

      {showCards && (
        <>
          {cards.map((card, index) => {
            let { title, body, id } = card;
            let cardIndex = index;
            return (
              <Card
                key={id}
                title={title}
                body={body}
                listIndex={listIndex}
                cardIndex={cardIndex}
              />
            );
          })}
        </>
      )}
      {showListContent && <InputCard listIndex={listIndex} />}
    </ListColumn>
  );
};
