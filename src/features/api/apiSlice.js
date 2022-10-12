import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const apiSlice = createApi({
    reducerPath: 'videoGalleryApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:9000'
    }),
    endpoints: () => ({})
})