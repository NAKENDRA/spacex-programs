import { SET_LAUNCH_YEAR_FILTER, SET_LAND_FILTER, SET_LAUNCH_FILTER } from "../reducers/FilterReducer";

export const setLaunchYearFilter = (data = '') => ({
  type: SET_LAUNCH_YEAR_FILTER,
  data,
});

export const setLandFilter = (data = '') => ({
  type: SET_LAND_FILTER,
  data,
});

export const setLaunchFilter = (data = '') => ({
  type: SET_LAUNCH_FILTER,
  data,
});