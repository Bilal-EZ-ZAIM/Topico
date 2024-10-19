import { createSlice } from "@reduxjs/toolkit";
import products from "../../data/products";
const initialState = {
  products,
  order: [],
  totle: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getCounter(state) {
      console.log(state.counter);
    },

    addOrder(state, action) {
      console.log(action.payload);
      const product = products.find((item) => item.id === action.payload.id);
      const dijaProduct = state.order.find(
        (item) => item.id === action.payload.id
      );
      if (!dijaProduct) {
        state.order.push(product);
        for (let index = 0; index < state.order.length; index++) {
          state.totle += state.order[index].discountedPrice;
        }
      }
    },

    removeOrder(state, action) {
      console.log(action.payload);
      const data = state.order.filter((item) => item.id !== action.payload.id);
      state.order = data;
      for (let index = 0; index < state.order.length; index++) {
        state.totle += state.order[index].discountedPrice;
      }
    },
  },
});

export const { getCounter, addOrder, removeOrder } = productSlice.actions;

export default productSlice.reducer;
