import { createSlice } from "@reduxjs/toolkit";

const sessionSlice = createSlice({
  name: "session",
  initialState: {
    session: true,
    isLoadingSession: false,
    error: false,
  },
  reducers: {
    sessionStart: (state) => {
      state.isLoadingSession = true;
    },
    sessionSuccess: (state, action) => {
      state.session = action.payload;
      state.isLoadingSession = false;
    },
    sessionFailure: (state) => {
      state.isLoadingSession = false;
      state.error = true;
    },
  },
});

export default sessionSlice.reducer;

export const { sessionStart, sessionSuccess, sessionFailure } =
  sessionSlice.actions;

export const selectSession = (state) => state.session.session;
export const selectIsLoadingSession = (state) => state.session.isLoadingSession;
export const selectError = (state) => state.session.error;
