import { configureStore } from "@reduxjs/toolkit";
import cathegoryReducer from "./features/cathegorySlice";

export default configureStore({
  reducer: {
    cathegory: cathegoryReducer,
  },
});
