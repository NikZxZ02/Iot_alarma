import { configureStore } from "@reduxjs/toolkit";
import sessionSlice from "../slices/sessionSlice";

export const store = configureStore({
  reducer: {
    session: sessionSlice,
  },
});
