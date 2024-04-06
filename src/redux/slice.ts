import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  current: string;
}

const initialState: CounterState = {
  current: "light",
};

export const interfaceSlice = createSlice({
  name: "interface",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.current = state.current == "light" ? "dark" : "light";
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = interfaceSlice.actions;

export default interfaceSlice.reducer;
