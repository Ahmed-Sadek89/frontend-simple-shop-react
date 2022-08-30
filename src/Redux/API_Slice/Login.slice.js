import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiLink } from '../../Assets/env';
import axios from 'axios';

export const postLogin = createAsyncThunk("login/add", async (data) => {
    try{
        let res = await axios.post(`${apiLink}/auth/login`, data)
        return res.data;
    } catch (error) {
        if ( error.response.status === 500 ) {
            return error.response.data
        } else {
            return error.response.status
        }
    }
});

export const loginSlice = createSlice({
    name: 'postLogin',
    initialState: {
        loading: false,
        data: null,
        error: false
    },
    extraReducers: {
        [postLogin.pending]: (state) => {
            state.loading = true;
            state.data = null
            state.error = false
        },
        [postLogin.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.data = payload
            state.error = false
        },
        [postLogin.rejected]: (state) => {
            state.loading = false;
            state.data = null
            state.error = true
        },
    }
})

export default loginSlice.reducer