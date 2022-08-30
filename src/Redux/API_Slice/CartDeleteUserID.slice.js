import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiLink } from '../../Assets/env';
import axios from 'axios';
import getCookie from '../../Hooks/getCookie';

export const deleteCartByUserID = createAsyncThunk("cart/delete_userID", async (userID) => {
    let res = await axios.delete(`${apiLink}/cart/delete/userID/${userID}`, {
        headers: {
            token: JSON.parse(getCookie('token'))
        }
    })
    return res.data;
});

export const CartDeleteByUserIDSlice = createSlice({
    name: 'deleteCartByUserID',
    initialState: {
        loading: false,
        data: null,
        error: false
    },
    extraReducers: {
        [deleteCartByUserID.pending]: (state) => {
            state.loading = true;
            state.data = null
            state.error = false
        },
        [deleteCartByUserID.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.data = payload
            state.error = false
        },
        [deleteCartByUserID.rejected]: (state) => {
            state.loading = false;
            state.data = null
            state.error = true
        },
    }
})

export default CartDeleteByUserIDSlice.reducer