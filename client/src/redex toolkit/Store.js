import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./redex slice/data"
export const store = configureStore({
    reducer: counterReducer,
})