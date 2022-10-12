import {apiSlice} from '../api/apiSlice';


const tagsApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getTags: build.query({
            query: () => `/tags`
        })
    })
})

export const {useGetTagsQuery}  = tagsApi;