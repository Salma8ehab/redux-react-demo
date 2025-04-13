import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "../features/user/userSliice";
import icecreamReducer from "../features/icecream/icecreamSlice"
import cakeReducer from "../features/cake/cakeSlice"


const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddle) => getDefaultMiddle().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;
// locale middleware
