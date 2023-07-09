import { createSlice } from "@reduxjs/toolkit";

const deviceSlice = createSlice({
  name: "device",
  initialState: {
    value: 0,
    isLoadingDevice: false,
  },
  reducers: {
    setDevice: (state, action) => {
      state.value = action.payload;
    },
    setIsLoadingDevice: (state, action) => {
      state.isLoadingDevice = action.payload;
    },
  },
});

export default deviceSlice.reducer;

export const { setDevice, setIsLoadingDevice } = deviceSlice.actions;

export const selectValue = (state) => state.device.value;
export const selectIsLoadingDevice = (state) => state.device.isLoadingDevice;
