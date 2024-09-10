import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  otpData: {},
};

export const otpSlice = createSlice({
  name: "otpData",
  initialState,
  reducers: {
    sotreOTPInfo(state, action) {
      state.otpData = action.payload;
    },
    removeOTPInfo(state) {
      state.otpData = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { sotreOTPInfo, removeOTPInfo } = otpSlice.actions;

export default otpSlice.reducer;
