import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiLink } from '../../Assets/env';
import axios from 'axios';
import getCookie from '../../Hooks/getCookie';

export const postOrder = createAsyncThunk("order/add", async (data) => {
    try{
        let res = await axios.post(`${apiLink}/order/add`, data, {
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

export const OrderAddSlice = createSlice({
    name: 'postOrder',
    initialState: {
        loading: false,
        data: null,
        error: false
    },
    extraReducers: {
        [postOrder.pending]: (state) => {
            state.loading = true;
            state.data = null
            state.error = false
        },
        [postOrder.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.data = payload
            state.error = false
        },
        [postOrder.rejected]: (state) => {
            state.loading = false;
            state.data = null
            state.error = true
        },
    }
})

export default OrderAddSlice.reducer