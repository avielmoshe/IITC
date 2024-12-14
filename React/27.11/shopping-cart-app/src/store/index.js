import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSilce.js";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
