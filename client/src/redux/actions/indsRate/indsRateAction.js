import {
    LIST_INDS_AREA_RATE_FAILED,
    LIST_INDS_AREA_RATE_REQUEST,
    LIST_INDS_AREA_RATE_SUCCESS,
    
  } from "../../type";
  import axios from "axios";
  
  
  export const listIndsAreaRate = () => async (dispatch) => {
    dispatch({
      type: LIST_INDS_AREA_RATE_REQUEST,
    });
    try {
      const res = await axios.get("/api/inds/area_rate");
      dispatch({
        type: LIST_INDS_AREA_RATE_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err.response);
      dispatch({
        type: LIST_INDS_AREA_RATE_FAILED,
        payload:
          err.response && err.response.data
            ? err.response.data.msg
            : err.response.data,
      });
    }
  };