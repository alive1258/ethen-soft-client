import { createSlice } from "@reduxjs/toolkit";

// initialState state for sidebar toggle
const initialState = {
  value: false,
  loginValue: false,
  registerValue: false,
  forgotPassword: false,
  setPassword: false,
};

// create  slice
export const sidebarToggleSlice = createSlice({
  initialState,
  name: "sidebarToggle",
  reducers: {
    // sidebar responsive toggle
    sidebarToggle: (state) => {
      state.value = !state.value;
    },
    cartMenuToggle: (state) => {
      state.cartValue = !state.cartValue;
    },
    loginModalToggle: (state) => {
      state.loginValue = !state.loginValue;
    },
    registerModalToggle: (state) => {
      state.registerValue = !state.registerValue;
    },
    forgotPasswordModalToggle: (state) => {
      state.forgotPassword = !state.forgotPassword;
    },
    setPasswordModalToggle: (state) => {
      state.setPassword = !state.setPassword;
    },
    // mobile responsive toggle sidebar
    mobileToggle: (state) => {
      state.mobileValue = !state.mobileValue;
    },
  },
});

//  export Toggle  action for sidebar toggle
export const {
  sidebartoggle,
  mobileToggle,
  cartMenuToggle,
  loginModalToggle,
  registerModalToggle,
  forgotPasswordModalToggle,
  setPasswordModalToggle,
} = sidebarToggleSlice.actions;

export default sidebarToggleSlice.reducer;
