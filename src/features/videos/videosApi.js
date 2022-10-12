import {apiSlice} from '../api/apiSlice';


const videosApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getVideos: build.query({
            query: () => `/videos`,
            keepUnusedDataFor: 500
        })
    }),
})

export const {useGetVideosQuery} = videosApi;