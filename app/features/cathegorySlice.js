import { createSlice } from "@reduxjs/toolkit";

export const cathegorySlice = createSlice({
  name: "cathegory",
  initialState: {
    activeCathegory: "toread",
  },
  reducers: {
    setActiveCathegory: (state, action) => {
      state.activeCathegory = action.payload;
    },
  },
});

export const { setActiveCathegory } = cathegorySlice.actions;

export const selectActiveCathegory = (state) => state.cathegory.activeCathegory;

export default cathegorySlice.reducer;
