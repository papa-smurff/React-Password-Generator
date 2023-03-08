import { configureStore } from "@reduxjs/toolkit";
import passwordGenSlice from "./passwordGenSlice";

const store = configureStore({
    reducer: {
        store: passwordGenSlice
    }
})
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch