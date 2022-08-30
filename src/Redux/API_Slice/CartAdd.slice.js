import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiLink } from '../../Assets/env';
import axios from 'axios';
import getCookie from '../../Hooks/getCookie';

export const postCart = createAsyncThunk("cart/add", async (data) => {
    try{
        let res = await axios.post(`${apiLink}/cart/add`, data, {
            headers: {
                token: JSON.parse(getCookie('token'))
            }
        })
        return res.data;
    } catch (error) {
        if ( error.response.status === 500 ) {
            return error.response.data
        } else {
            return error.response.status
        }
    }
});

export const CartAddSlice = createSlice({
    name: 'postCart',
    initialState: {
        loading: false,
        data: null,
        error: false
    },
    extraReducers: {
        [postCart.pending]: (state) => {
            state.loading = true;
            state.data = null
            state.error = false
        },
        [postCart.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.data = payload
            state.error = false
        },
        [postCart.rejected]: (state) => {
            state.loading = false;
            state.data = null
            state.error = true
        },
    }
})

export default CartAddSlice.reducer