import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  current: string;
  result: number;
  history: object[];
  operation: string;
  previous: string;
  number: string;
  appliedNumber: string;
}

const initialState: CounterState = {
  current: "light",
  result: 0,
  history: [],
  operation: "",
  previous: "",
  appliedNumber: "",
  number: "",
};

export const interfaceSlice = createSlice({
  name: "interface",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.current = state.current == "light" ? "dark" : "light";
    },
    setNumber: (state, action) => {
      state.number = state.number + action.payload;
      state.previous = state.previous + action.payload;
      console.log(state.number);
    },
    setOperation: (state, action) => {
      state.operation = action.payload;
      state.appliedNumber = state.number;
      state.previous = state.appliedNumber + state.operation;
      state.number = "";
      console.log(state.previous, "state.previous");
    },
    setResult: (state) => {
      state.result =
        state.operation == "+"
          ? Number(state.number) + Number(state.appliedNumber)
          : state.operation == "-"
          ? Number(state.appliedNumber) - Number(state.number)
          : state.operation == "*"
          ? Number(state.number) * Number(state.appliedNumber)
          : state.operation == "/"
          ? Number(state.appliedNumber) / Number(state.number)
          : null;
      state.number = "";
      state.appliedNumber = "";
      state.operation = "";
    },
    setClear: (state) => {
      const toHistory = state.previous + "=" + state.result;
      state.history = [...state.history, toHistory];
      state.number = "";
      state.appliedNumber = "";
      state.result = 0;
      state.operation = "";
      state.previous = "";
      return console.log(toHistory);
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme, setNumber, setResult, setOperation, setClear } =
  interfaceSlice.actions;

export default interfaceSlice.reducer;
