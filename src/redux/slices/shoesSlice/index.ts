import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ShoesProps, initialStateProps } from "./types";

export const fetchShoes = createAsyncThunk<ShoesProps[]>(
  "fetchShoesArray",
  async () => {
    try {
      const { data } = await axios.get<ShoesProps[]>(
        `https://6596f8186bb4ec36ca03a827.mockapi.io/PC`
      );
      return data;
    } catch (error) {
      throw error && console.log(error)
    }
  }
);

const initialState: initialStateProps = {
  items: [],
  status: "",
};

const shoesSlice = createSlice({
  name: "shoesSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShoes.pending, (state) => {
        state.status = "loading";
        state.items = [];
      })
      .addCase(fetchShoes.fulfilled, (state, action) => {
        state.status = "succes";
        state.items = action.payload;
      })
      .addCase(fetchShoes.rejected, (state) => {
        state.status = "error";
        state.items = [];
      });
  },
});

export default shoesSlice.reducer;
