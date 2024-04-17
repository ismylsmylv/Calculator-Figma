import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  current: string;
  result: number | string | null;
  history: string | object[] | object;
  historyOpen: boolean;
  operation: string;
  previous: string;
  number: string;
  appliedNumber: string;
}

const initialState: CounterState = {
  current: "light",
  result: 0,
  history: JSON.parse(localStorage.getItem("history") as string) || [],
  operation: "",
  previous: "",
  appliedNumber: "",
  number: "",
  historyOpen: false,
};

export const interfaceSlice = createSlice({
  name: "interface",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.current = state.current == "light" ? "dark" : "light";
    },
    toggleHistory: (state) => {
      state.historyOpen = !state.historyOpen;
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
      console.log(Number(Number(state.appliedNumber) / Number(state.number)));
      state.result =
        state.operation == "+"
          ? Number(state.number) + Number(state.appliedNumber)
          : state.operation == "-"
          ? Number(state.appliedNumber) - Number(state.number)
          : state.operation == "*"
          ? Number(state.number) * Number(state.appliedNumber)
          : state.operation == "/"
          ? Number(state.appliedNumber) / Number(state.number)
          : state.operation == "%"
          ? Number(Number(state.appliedNumber) / Number(state.number))
          : null;
      state.number = state.result as string | number;
      state.appliedNumber = "";
      state.operation = "";
    },
    setClear: (state) => {
      const toHistory = state.previous + "=" + state.result;
      state.history = [...(state.history as any), toHistory];
      // const fromLocal = JSON.parse(localStorage.getItem("history")) || [];
      localStorage.setItem("history", JSON.stringify(state.history));
      state.number = "";
      state.appliedNumber = "";
      state.result = 0;
      state.operation = "";
      state.previous = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  toggleTheme,
  setNumber,
  setResult,
  setOperation,
  setClear,
  toggleHistory,
} = interfaceSlice.actions;

export default interfaceSlice.reducer;
