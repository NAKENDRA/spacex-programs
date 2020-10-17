import { createStore, applyMiddleware  } from "redux";
import { createWrapper } from "next-redux-wrapper";
import baseReducer from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const makeStore = () =>
  createStore(baseReducer, {},composeWithDevTools(applyMiddleware(thunk)));

export const wrapper = createWrapper(makeStore);