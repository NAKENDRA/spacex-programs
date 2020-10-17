import { combineReducers } from "redux";
import  {FilterReducer}  from './FilterReducer';
import SpaceXReducer from './SpaceXReducer';

const baseReducer = combineReducers({
    FilterReducer,
    SpaceXReducer
});

export default baseReducer;