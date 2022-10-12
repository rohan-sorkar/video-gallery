import { configureStore } from "@reduxjs/toolkit";
import {apiSlice} from '../features/api/apiSlice';
import searchAndFilterReducer  from "../features/searchAndFilter/searchAndFilterSlice";


export const store = configureStore({
    reducer: {
        searchAndFilter: searchAndFilterReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})