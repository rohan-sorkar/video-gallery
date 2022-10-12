import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const apiSlice = createApi({
    reducerPath: 'videoGalleryApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:5173'
    }),
    endpoints: () => ({})
})