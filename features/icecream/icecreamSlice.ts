// const createSlice = require("@redux.js/toolkit").createSlice;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";



type initialStateType = {
  numberOfIcecreams: number;
};

const initialState:initialStateType = {
  numberOfIcecreams: 20,
};
const icecreamSLice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfIcecreams--;
    },
    reStocked: (state, action: PayloadAction<number>) => {
      state.numberOfIcecreams += action.payload;
    },
  },

  extraReducers: (builer) => {
    builer.addCase(cakeOrdered, (state) => {
      state.numberOfIcecreams--
    })
  }
});
// module.exports = icecreamSLice.reducer;
// module.exports.icecreamActions = icecreamSLice.action;
export default icecreamSLice.reducer;
export const { ordered, reStocked } = icecreamSLice.actions;
