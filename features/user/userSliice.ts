import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import reducer from "./userSliice";

type User = {
  id:number,
  name:string,
}

type intialStateType={
  loading:boolean,
  data:User[],
  error:string,
}


const initialState : intialStateType = {
  loading: false,
  data: [],
  error: "",
};

const fetchUser = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("http://jsonplaceholder.typicode.com/users")
    .then((res) => res.data);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message || "something went wrong";
    });
  },
});
export default userSlice.reducer;
export  {fetchUser}