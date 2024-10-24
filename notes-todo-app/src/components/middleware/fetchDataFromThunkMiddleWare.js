import axios from "axios";
import {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataError,
} from "../redux/UserInfoSlice";

export const fetchDataFromThunkMiddleWare = async (dispatch, userId) => {
  dispatch(fetchDataStart());

  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const tt = setTimeout(async () => {
        if(res){
            dispatch(fetchDataSuccess(res.data));
        }
      
    }, 1000);
    return () => {
      clearTimeout(tt);
    };
  } catch (error) {
    dispatch(fetchDataError(error.message));
  }
};
