import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = usersSlice.actions;

export default usersSlice.reducer;
