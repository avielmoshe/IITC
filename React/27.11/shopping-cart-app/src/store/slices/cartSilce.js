import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0, totalPrice: 0 },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.items.push(action.payload);
      } else {
        existingItem.Quantity += action.payload.Quantity;
        existingItem.totalPrice += action.payload.totalPrice;
      }
      state.totalQuantity += action.payload.Quantity;
      state.totalPrice += action.payload.totalPrice;
    },

    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      state.items.splice(itemIndex, 1);
      state.totalQuantity--;
      state.totalPrice -= action.payload.price;
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
