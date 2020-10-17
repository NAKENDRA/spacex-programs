import { HYDRATE } from "next-redux-wrapper";

export const ON_SUCCESS = 'ON_SUCCESS';
export const ON_ERROR = 'ON_ERROR';

const initialSpaceXState = {
  loading: true,
  error: "",
  data: [],
  };

  const SpaceXReducer = (state = initialSpaceXState, action) => {
    switch (action.type) {
      case ON_SUCCESS:
        return {
          ...state,
          loading: false,
          error: "",
          data: action.data,
        };
      case ON_ERROR:
        return {
          ...state,
          loading: false,
          error: action.data,
          data: [],
        };
      default:
        return state;
    }
  };
  
  export default SpaceXReducer;

    // case HYDRATE:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: "",
    //     data: action.payload.missions.missions,
    //   };
   


