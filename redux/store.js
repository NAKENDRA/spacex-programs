import { createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import baseReducer from "./reducers";

export const makeStore = () =>
  createStore(baseReducer, {});

export const wrapper = createWrapper(makeStore);