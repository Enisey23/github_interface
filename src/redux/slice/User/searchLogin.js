import { createSlice} from "@reduxjs/toolkit";
import { fetchUser } from "./fetchUser";

const initialState = {
  data: [],
  status: "loading",
};

const userSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.status = "loading";
      state.data = [];
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    [fetchUser.rejected]: (state) => {
      state.status = "error";
      state.data = [];
    },
  },
});

export const userLoginReducer = userSlice.reducer;
