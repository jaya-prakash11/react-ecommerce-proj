import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  value: 0,
  jp: 0,
};
export const counterSlice = createSlice({
  name: "counster",
  initialState,
  reducers: {
    increment: (state) => {
      console.log("inisde", state.value);
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value += 1;
      state.jp += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
