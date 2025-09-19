import { createSlice } from "@reduxjs/toolkit";

const loggedLocalSlice = createSlice({
  name: "loggedLocal",
  initialState: { value: {} },
  reducers: {
    loggedIn: (state, action) => {
      state.value.is = true;
      state.value.user = action.payload;
    },
    loggedOut: (state) => {
      state.value.is = false;
      state.value.user = null;
    },
  },
});
export const { loggedIn, loggedOut } = loggedLocalSlice.actions;
export default loggedLocalSlice.reducer;
