import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiLink } from '../../Assets/env';
import axios from 'axios';

export const getProductOfThisID = createAsyncThunk("oneProduct/add", async (id) => {
    let res = await axios.get(`${apiLink}/product/get/${id}`)
    return res.data;
});

export const oneProductSlice = createSlice({
    name: 'getProductOfThisID',
    initialState: {
        loading: false,
        data: null,
        error: false
    },
    extraReducers: {
        [getProductOfThisID.pending]: (state) => {
            state.loading = true;
            state.data = null
            state.error = false
        },
        [getProductOfThisID.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.data = payload
            state.error = false
        },
        [getProductOfThisID.rejected]: (state) => {
            state.loading = false;
            state.data = null
            state.error = true
        },
    }
})

export default oneProductSlice.reducer