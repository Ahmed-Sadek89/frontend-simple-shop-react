import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiLink } from '../../Assets/env';
import axios from 'axios';

export const postSignup = createAsyncThunk("signup/add", async (data) => {
    try{
        let res = await axios.post(`${apiLink}/auth/signup`, data)
        return res.data;
    } catch (error) {
        console.log(error.response.status);
        
        if ( error.response.status === 500 ) {
            return error.response.data
        } else {
            return error.response.status
        }
    }
});

export const signupSlice = createSlice({
    name: 'postSignup',
    initialState: {
        loading: false,
        data: null,
        error: false
    },
    extraReducers: {
        [postSignup.pending]: (state) => {
            state.loading = true;
            state.data = null
            state.error = false
        },
        [postSignup.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.data = payload
            state.error = false
        },
        [postSignup.rejected]: (state) => {
            state.loading = false;
            state.data = null
            state.error = true
        },
    }
})

export default signupSlice.reducer