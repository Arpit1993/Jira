import { configureStore } from "@reduxjs/toolkit";
import { listReducer } from "./reducers/list";

export const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem("state", JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
};

export const loadFromLocalStorage = () => {
  try {
    const stateStr = localStorage.getItem("state");
    return stateStr ? JSON.parse(stateStr) : undefined;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

export const persistedStore = loadFromLocalStorage();

export default configureStore(
  {
    reducer: {
      list: listReducer
    }
  },
  persistedStore
);
