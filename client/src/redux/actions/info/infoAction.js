import {
  LIST_CROWING_RATE_FAILED,
  LIST_CROWING_RATE_REQUEST,
  LIST_CROWING_RATE_SUCCESS,
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
import axios from "axios";

export const listCrowRate = () => async (dispatch) => {
  dispatch({
    type: LIST_CROWING_RATE_REQUEST,
  });
  try {
    const res = await axios.get("/api/info/crowRate");
    dispatch({
      type: LIST_CROWING_RATE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_CROWING_RATE_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const listSuppRate = () => async (dispatch) => {
  dispatch({
    type: LIST_SUPPORT_RATE_REQUEST,
  });
  try {
    const res = await axios.get("/api/info/supp");
    dispatch({
      type: LIST_SUPPORT_RATE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_SUPPORT_RATE_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const listAreaRate = () => async (dispatch) => {
  dispatch({
    type: LIST_AREA_RATE_REQUEST,
  });
  try {
    const res = await axios.get("/api/info/area");
    dispatch({
      type: LIST_AREA_RATE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_AREA_RATE_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const listIndRate = () => async (dispatch) => {
  dispatch({
    type: LIST_IND_RATE_REQUEST,
  });
  try {
    const res = await axios.get("/api/info/ind");
    dispatch({
      type: LIST_IND_RATE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_IND_RATE_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const listIncRate = () => async (dispatch) => {
  dispatch({
    type: LIST_INC_RATE_REQUEST,
  });
  try {
    const res = await axios.get("/api/info/inc");
    dispatch({
      type: LIST_INC_RATE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_INC_RATE_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
