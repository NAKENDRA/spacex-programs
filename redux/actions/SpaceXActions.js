
import {
    ON_SUCCESS,
    ON_ERROR,
  } from "../reducers/SpaceXReducer";
  

  export const setSpaceXData = (data = {}) => ({
    type: ON_SUCCESS,
    data,
  });
  
  export const setError = (data = "") => ({
    type: ON_ERROR,
    data,
  });

export function getData(URL){
    return async (dispatch) => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log('data', data)
        if (data.error) {
          dispatch(setError("Error Response From API"));
        } else {
          dispatch(setSpaceXData(data));
        }
      } catch (error) {
        dispatch(setError('Server Error'));
      }
    };
  };
  