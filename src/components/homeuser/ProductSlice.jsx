import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//initial state
const initialState = {
  items: [],
  status: null,
};

// params action/payload creator
export const menu_itemsFetch = createAsyncThunk(
  "menu_items/menu_itemsFetch",

  //   payload creator
  async () => {
    try {
      const response = await axios.get(
        "https://ror-meals.onrender.com/menu_items"
      );
      return response?.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const menu_itemsSlice = createSlice({
  name: "menu_items",
  initialState,
  reducers: {},

  //   generate action creator and handle action creator
  extraReducers: {
    [menu_itemsFetch.pending]: (state, action) => {
      // check immer
      state.status = "pending";
    },
    [menu_itemsFetch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [menu_itemsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default menu_itemsSlice.reducer;
