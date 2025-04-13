// const createSlice = require("reduxjs/toolkit").createSlice;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type intialStateType = {
  numberOfCakes: number;
};
const initialState: intialStateType = {
  numberOfCakes: 10,
};
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    // function that handling the order
    ordered: (state) => {
      state.numberOfCakes--;
    },
    reStocked: (state, action: PayloadAction<number>) => {
      state.numberOfCakes += action.payload;
    },
  },
});
export default cakeSlice.reducer;
export const { ordered, reStocked } = cakeSlice.actions;
// module.exports.cakeActions = cakeSlice.actions;
