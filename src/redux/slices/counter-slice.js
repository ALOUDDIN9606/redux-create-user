import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    inc: (state, action) => {
      state.value += action.payload ? action.payload : 1;
    },
    dec: (state, action) => {
      if (state.value > 0) {
        state.value -= action.payload ? action.payload : 1;
      }
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { inc, dec, reset } = counterSlice.actions;
export default counterSlice.reducer;
