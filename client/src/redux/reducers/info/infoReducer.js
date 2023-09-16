import {
  LIST_CROWING_RATE_REQUEST,
  LIST_CROWING_RATE_SUCCESS,
  LIST_CROWING_RATE_FAILED,
  LIST_SUPPORT_RATE_REQUEST,
  LIST_SUPPORT_RATE_SUCCESS,
  LIST_SUPPORT_RATE_FAILED,
  LIST_AREA_RATE_REQUEST,
  LIST_AREA_RATE_SUCCESS,
  LIST_AREA_RATE_FAILED,
  LIST_IND_RATE_REQUEST,
  LIST_IND_RATE_SUCCESS,
  LIST_IND_RATE_FAILED,
  LIST_INC_RATE_REQUEST,
  LIST_INC_RATE_SUCCESS,
  LIST_INC_RATE_FAILED,
} from "../../type";
const initialState = {
  data: [],
};
export const listCrowRateReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_CROWING_RATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_CROWING_RATE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case LIST_CROWING_RATE_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const listSuppRateReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_SUPPORT_RATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_SUPPORT_RATE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case LIST_SUPPORT_RATE_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
export const listAreaRateReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_AREA_RATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_AREA_RATE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case LIST_AREA_RATE_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
export const listIndRateReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_IND_RATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_IND_RATE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case LIST_IND_RATE_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
export const listIncRateReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_INC_RATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_INC_RATE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case LIST_INC_RATE_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
