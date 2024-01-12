import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice.ts";
import authReducer from "./auth/authSlice.ts"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;