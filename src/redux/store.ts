import { configureStore } from "@reduxjs/toolkit";
import shoesSlice from "./slices/shoesSlice";
import { useDispatch } from "react-redux";
import addCard from './slices/getCardShoesSlice'


export const store = configureStore({
  reducer: {
    shoes: shoesSlice,
    addCard
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatсh: () => typeof store.dispatch = useDispatch
export default store
