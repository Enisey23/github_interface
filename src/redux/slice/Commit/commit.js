import { createSlice } from "@reduxjs/toolkit";
import { fetchCommit } from "./fetchCommit";


const initialState = {
  data: null,
  status: "loading",
};

const commitSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCommit.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchCommit.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    [fetchCommit.rejected]: (state) => {
      state.status = "error";
      state.data = null;
    },
  },
});

export const commitReducer = commitSlice.reducer;
