import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiLink } from '../../Assets/env';
import axios from 'axios';

export const getAllProductsInCat = createAsyncThunk("allProductsInCat/add", async (catName) => {
    let res = await axios.get(`${apiLink}/product/getAll?categories=${catName}`)
    return res.data;
});

export const productsInCatSlice = createSlice({
    name: 'getAllProductsInCat',
    initialState: {
        loading: false,
        data: null,
        error: false
    },
    extraReducers: {
        [getAllProductsInCat.pending]: (state) => {
            state.loading = true;
            state.data = null
            state.error = false
        },
        [getAllProductsInCat.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.data = payload
            state.error = false
        },
        [getAllProductsInCat.rejected]: (state) => {
            state.loading = false;
            state.data = null
            state.error = true
        },
    }
})

export default productsInCatSlice.reducer