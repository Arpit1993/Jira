import {
  ADD_NEW_CARD,
  ADD_NEW_LIST,
  CARD_MOVE,
  ERROR,
  REMOVE_CARD,
  REMOVE_LIST,
  RESET_ERROR
} from "./action_constants";

import { createAction } from "@reduxjs/toolkit";

export const addNewList = createAction(ADD_NEW_LIST);

export const addNewCard = createAction(ADD_NEW_CARD);

export const removeCard = createAction(REMOVE_CARD);

export const removeList = createAction(REMOVE_LIST);

export const cardMove = createAction(CARD_MOVE);

export const resetError = createAction(RESET_ERROR);

export const setError = createAction(ERROR);