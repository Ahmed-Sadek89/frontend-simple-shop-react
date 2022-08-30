import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiLink } from '../../Assets/env';
import axios from 'axios';
import getCookie from '../../Hooks/getCookie';

export const getCart = createAsyncThunk("cart/get", async (userID) => {
    let res = await axios.get(`${apiLink}/cart/get/${userID}`, {
        headers: {
            token: JSON.parse(getCookie('token'))
        }
    })
    return res.data;
});

export const CartGetByIDSlice = createSlice({
    name: 'getCart',
    initialState: {
        loading: false,
        data: null,
        error: false
    },
    extraReducers: {
        [getCart.pending]: (state) => {
            state.loading = true;
            state.data = null
            state.error = false
        },
        [getCart.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.data = payload
            state.error = false
        },
        [getCart.rejected]: (state) => {
            state.loading = false;
            state.data = null
            state.error = true
        },
    }
})

export default CartGetByIDSlice.reducer