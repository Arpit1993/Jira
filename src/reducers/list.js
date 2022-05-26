import { createReducer } from "@reduxjs/toolkit";
import {
  addNewCard,
  addNewList,
  cardMove,
  removeCard,
  removeList,
  resetError,
  setError,
} from "../actions/list";
import { persistedStore } from "../store";

const initialState = {
  list: [
    {
      id: 1,
      listHeading: "Task1",
      cards: [{ id: 1, title: "hello", body: "Lorem Ipsum" }],
    },
  ],
  listCount: 1,
  cardCount: 1,
  error: false,
  errorObj: {},
};

// export const listReducer = (state = initialState, action) => {
//   console.log(state);
//   switch (action.type) {
//     case "ADD_NEW_LIST":
//       console.log("Being called");
//       let newState = {
//         ...state,
//         list: state.list.push({ listHeading: action.payload })
//       };
//       console.log(newState);
//       return newState;
//       break;
//     default:
//       return state;
//   }
// };

export const listReducer = createReducer(
  () => persistedStore?.list || initialState,
  (builder) => {
    builder
      .addCase(addNewList, (state, action) => {
        state.listCount++;
        state.list.push({
          id: state.listCount,
          listHeading: action.payload,
          cards: [],
        });
      })
      .addCase(addNewCard, (state, action) => {
        state.cardCount++;
        let { listIndex, title, body } = action?.payload;
        state.list[listIndex].cards.push({ id: state.cardCount, title, body });
      })
      .addCase(removeCard, (state, action) => {
        let { listIndex, cardIndex } = action?.payload;
        state.list[listIndex].cards.splice(cardIndex, 1);
      })
      .addCase(removeList, (state, action) => {
        let { listIndex } = action?.payload;
        state.list.splice(listIndex, 1);
      })
      .addCase(cardMove, (state, action) => {
        let {
          indexOfListToAddCard,
          cardToBeRemovedFromList,
          indexOfListToRemoveFrom,
        } = action?.payload;
        let cardCopy = JSON.stringify(
          state.list[indexOfListToRemoveFrom].cards[cardToBeRemovedFromList]
        );
        if (!state.list[indexOfListToAddCard]) {
          state.error = true;
          state.errorObj = {
            title: "Error while moving the card to new list",
            message: `Please make sure you have added the title to the list where you are trying to moved the card`,
          };
          return;
        }
        state.list[indexOfListToRemoveFrom].cards.splice(
          cardToBeRemovedFromList,
          1
        );

        state.list[indexOfListToAddCard].cards.push(JSON.parse(cardCopy));
        console.log("cardCopy: ", cardCopy);
      })
      .addCase(resetError, (state, action) => {
        (state.error = false), (state.errorObj = {});
      })
      .addCase(setError, (state, action) => {
        state.error = true;
        state.errorObj.title = action.payload?.title;
        state.errorObj.message = action.payload?.message;
      })
      .addDefaultCase((state, action) => {
        state;
      });
  }
);
