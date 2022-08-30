import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiLink } from '../../Assets/env';
import axios from 'axios';
import getCookie from '../../Hooks/getCookie';

export const updateCart = createAsyncThunk("cart/update", async (payload) => {
    let res = await axios.put(`${apiLink}/cart/update/${payload.id}`, 
    {cart: payload.cart}, 
    {
        headers: {
            token: JSON.parse(getCookie('token'))
        }
    })
    
    return res.data;
});

export const CartUpdateByIDSlice = createSlice({
    name: 'updateCart',
    initialState: {
        loading: false,
        data: null,
        error: false
    },
    extraReducers: {
        [updateCart.pending]: (state) => {
            state.loading = true;
            state.data = null
            state.error = false
        },
        [updateCart.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.data = payload
            state.error = false
        },
        [updateCart.rejected]: (state) => {
            state.loading = false;
            state.data = null
            state.error = true
        },
    }
})

export default CartUpdateByIDSlice.reducer