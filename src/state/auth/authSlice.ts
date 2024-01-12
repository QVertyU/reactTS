import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

interface AuthState {
    authorized: boolean,
    user: object,
}

const initialState: AuthState = {
    authorized: false,
    user: {},
}



const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(authUser.fulfilled, (state, action: PayloadAction<object>) => {
            state.authorized = true;
            state.user = action.payload;
        });
    }
});

export const authUser = createAsyncThunk(
    "auth/authUser",
    async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
                params: {
                    username: 'Bret',
                    email: 'Sincere@april.biz',
                }
            })
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }
);

export default authSlice.reducer;