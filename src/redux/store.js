import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/productsSlice";
const store = configureStore({
  reducer: {
    product: productSlice,
  },
});

export default store;
