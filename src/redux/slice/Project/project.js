import { createSlice} from "@reduxjs/toolkit";
import { fetchProject } from "./fetchProject";

const initialState = {
  data: null,
  status: "loading",
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProject.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchProject.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    [fetchProject.rejected]: (state) => {
      state.status = "error";
      state.data = null;
    },
  },
});

export const projectReducer = projectSlice.reducer;
