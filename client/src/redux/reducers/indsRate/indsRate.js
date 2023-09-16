import {
  LIST_INDS_AREA_RATE_REQUEST,
  LIST_INDS_AREA_RATE_SUCCESS,
  LIST_INDS_AREA_RATE_FAILED,
} from "../../type";
const initialState = {
  data: [],
};
export const listIndsAreaRateReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_INDS_AREA_RATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_INDS_AREA_RATE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case LIST_INDS_AREA_RATE_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
