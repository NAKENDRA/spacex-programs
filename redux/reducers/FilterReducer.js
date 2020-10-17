import {setCookieFunc } from 'utils';
export const SET_LAUNCH_YEAR_FILTER = 'SET_LAUNCH_YEAR_FILTER';
export const SET_LAND_FILTER = 'SET_LAND_FILTER';
export const SET_LAUNCH_FILTER = 'SET_LAUNCH_FILTER';

const initialFilterState = {
    launchYearFilter: '',
    landFilter: '',
    launchFilter: '',
  };


  export const FilterReducer = (state = initialFilterState, action) => {
    switch (action.type) {
      case SET_LAUNCH_YEAR_FILTER:
        setCookieFunc('launchYearFilter', action.data)
        return {
          ...state,
          launchYearFilter: action.data,
        };
      case SET_LAND_FILTER:
        setCookieFunc('landFilter', action.data)
        return {
          ...state,
          landFilter: action.data,
        };
      case SET_LAUNCH_FILTER:
        setCookieFunc('launchFilter', action.data)
        return {
          ...state,
          launchFilter: action.data,
        };
      default:
        return state;
    }
  };