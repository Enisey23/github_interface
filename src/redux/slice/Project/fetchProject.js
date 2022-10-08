import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProject = createAsyncThunk('Search/fetchProject', async (params) => {
    const { data } = await axios.get(`https://api.github.com/users/${params}/repos`)
    return data;
});
