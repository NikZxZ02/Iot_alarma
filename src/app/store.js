import { configureStore } from "@reduxjs/toolkit";
import sessionSlice from "../slices/sessionSlice";
import deviceSlice from "../slices/deviceSlice";

export const store = configureStore({
  reducer: {
    session: sessionSlice,
    device: deviceSlice,
  },
});
