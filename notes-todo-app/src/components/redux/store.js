import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import UserInfoSlice from "./UserInfoSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    userinfo:UserInfoSlice,
  }
});
