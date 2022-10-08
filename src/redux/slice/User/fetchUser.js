import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk('Search/fetchUser', async (params) => {
    const { data } = await axios.get(`https://api.github.com/users/${params}`)
    return data;
});
