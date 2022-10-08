import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCommit = createAsyncThunk(
  "Search/fetchCommit",
  async ([login, project]) => {
    const { data } = await axios.get(
      `https://api.github.com/repos/${login}/${project}/commits`
    );
    return data;
  }
);
