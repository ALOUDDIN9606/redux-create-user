import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter-slice";
import wishlistSlice from "./slices/wishlist-slice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    wishlist: wishlistSlice,
  },
});

export default store;
