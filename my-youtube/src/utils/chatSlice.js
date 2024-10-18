import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT_COUNT } from "./Constant";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if(state.message.length){
        state.message.splice(OFFSET_LIVE_CHAT_COUNT,1)  // restrict message length to be 20..
      }
      state.message.unshift(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
