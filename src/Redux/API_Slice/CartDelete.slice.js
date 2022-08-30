import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiLink } from '../../Assets/env';
import axios from 'axios';
import getCookie from '../../Hooks/getCookie';

export const deleteCart = createAsyncThunk("cart/delete", async (cartID) => {
    let res = await axios.delete(`${apiLink}/cart/delete/${cartID}`, {
        headers: {
            token: JSON.parse(getCookie('token'))
        }
    })
    return res.data;
});

export const CartDeleteByIDSlice = createSlice({
    name: 'deleteCart',
    initialState: {
        loading: false,
        data: null,
        error: false
    },
    extraReducers: {
        [deleteCart.pending]: (state) => {
            state.loading = true;
            state.data = null
            state.error = false
        },
        [deleteCart.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.data = payload
            state.error = false
        },
        [deleteCart.rejected]: (state) => {
            state.loading = false;
            state.data = null
            state.error = true
        },
    }
})

export default CartDeleteByIDSlice.reducer