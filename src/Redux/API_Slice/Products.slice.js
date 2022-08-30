import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiLink } from '../../Assets/env';
import axios from 'axios';



export const getAllProducts = createAsyncThunk("allProducts/add", async () => {
    let res = await axios.get(`${apiLink}/product/getAll`)
    return res.data;
});

export const productSlice = createSlice({
    name: 'getAllProducts',
    initialState: {
        loading: false,
        data: null,
        error: false
    },
    extraReducers: {
        [getAllProducts.pending]: (state) => {
            state.loading = true;
            state.data = null
            state.error = false
        },
        [getAllProducts.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.data = payload
            state.error = false
        },
        [getAllProducts.rejected]: (state) => {
            state.loading = false;
            state.data = null
            state.error = true
        },
    }
})

export default productSlice.reducer