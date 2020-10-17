import {  setCookie,destroyCookie } from 'nookies'
export const SET_LAUNCH_YEAR_FILTER = 'SET_LAUNCH_YEAR_FILTER';
export const SET_LAND_FILTER = 'SET_LAND_FILTER';
export const SET_LAUNCH_FILTER = 'SET_LAUNCH_FILTER';

const initialFilterState = {
    launchYearFilter: null,
    landFilter: null,
    launchFilter: null,
  };


  export const FilterReducer = (state = initialFilterState, action) => {
    switch (action.type) {
      case SET_LAUNCH_YEAR_FILTER:
        setCookie(null, 'launchYearFilter', action.data, {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        })
        return {
          ...state,
          launchYearFilter: action.data,
        };
      case SET_LAND_FILTER:
        setCookie(null, 'landFilter', action.data, {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        })
        return {
          ...state,
          landFilter: action.data,
        };
      case SET_LAUNCH_FILTER:
        setCookie(null, 'launchFilter', action.data, {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        })
        return {
          ...state,
          launchFilter: action.data,
        };
      default:
        return state;
    }
  };