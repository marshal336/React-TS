import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialStateProps, shoesSliceProps } from "./types";

const initialState: initialStateProps = {
  totalPrice: 0,
  item: [],
  cout: 0,
  setHidden: false,
};
const addCard = createSlice({
  name: "addCardAll",
  initialState,
  reducers: {
    addCardTo: (state, action: PayloadAction<shoesSliceProps>) => {
      const findItem = state.item.find((obj) => obj.id === action.payload.id);
      if (findItem?.count) {
        findItem.count++;
        state.cout++;
      } else {
        state.item.push({ ...action.payload, count: 1 });
        state.cout++;
        state.setHidden = true;
      }
      state.totalPrice = state.item.reduce((num, obj) => {
        return obj.count * obj.price[0] + num;
      }, 0);
    },
    minusTo: (state, action) => {
      const findItem = state.item.find((obj) => obj.id === action.payload.id);
      if (findItem?.count) {
        findItem.count--;
        state.cout--;
      }
    },
    removeItem: (state, action: PayloadAction<shoesSliceProps>) => {
      state.item = state.item.filter((obj) => obj.id !== action.payload.id);
    },
    deleteAll: (state) => {
      state.cout = 0;
      state.setHidden = false;
      state.item = [];
      state.totalPrice = 0;
    },
  },
});

export const { addCardTo, minusTo, removeItem, deleteAll } = addCard.actions;
export default addCard.reducer;
