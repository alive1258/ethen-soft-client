// redux/slices/authSlice.js
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  customer: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    customerInfo(state, action) {
      state.customer = action.payload;
    },
    logout(state) {
      state.customer = null;
    },
  },
});

export const { customerInfo, logout } = authSlice.actions;
export default authSlice.reducer;
