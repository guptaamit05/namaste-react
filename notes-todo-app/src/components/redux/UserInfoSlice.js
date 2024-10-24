import { createSlice } from "@reduxjs/toolkit";

const UserInfoSlice = createSlice({
  name: "userinfo",
  initialState: {
    data: {},
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchDataStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.isLoading = false;
      state.data[action.payload.id] = action.payload;
    },
    fetchDataError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataError } =
  UserInfoSlice.actions;
export default UserInfoSlice.reducer;
