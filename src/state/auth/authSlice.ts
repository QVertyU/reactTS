import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios, {AxiosError} from "axios";

interface AuthState {
    authorized: boolean,
    user: object,
}

interface data {
    password: string,
    email: string,
}

const initialState: AuthState = {
    authorized: false,
    user: {},
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.authorized = false;
            state.user = {};
            sessionStorage.setItem('userAuth', JSON.stringify(false));
            sessionStorage.removeItem('userData');
        }
    },
    extraReducers: (builder) => {
        //authUser
        builder
            .addCase(authUser.fulfilled, (state, action: PayloadAction<object>) => {
                state.authorized = true;
                state.user = action.payload;
                sessionStorage.setItem('userAuth', JSON.stringify(true));
                sessionStorage.setItem('userData', JSON.stringify(action.payload));
            })
            .addCase(authUser.rejected, (state) => {
                state.authorized = false;
                sessionStorage.setItem('userAuth', JSON.stringify(false));
            });
    }
});

export const authUser = createAsyncThunk(
    "auth/authUser",
    async ({email, password}: data, thunkAPI) => {
        try {
            const response = await axios.get('http://generaluseapi.local/auth', {
                params: {
                    email: email,
                    password: password,
                }
            })
            return response.data;

        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const {logout} = authSlice.actions;

export default authSlice.reducer;