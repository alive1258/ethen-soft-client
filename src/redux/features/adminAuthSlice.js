// redux/slices/adminAuthSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const adminAuthSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    adminInfo(state, action) {
      state.user = action.payload;
    },
    adminLogout(state) {
      state.user = null;
    },
  },
});

export const { adminInfo, adminLogout } = adminAuthSlice.actions;
export default adminAuthSlice.reducer;
