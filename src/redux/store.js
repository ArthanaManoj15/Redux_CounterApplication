import counterSlice from "./counterSlice";
import { configureStore } from '@reduxjs/toolkit'
// import { store } from './redux/store.js'



export const store = configureStore({
    // reducer
    reducer: {
        counterReducer: counterSlice
    }
})