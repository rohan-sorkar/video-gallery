import {apiSlice} from '../api/apiSlice';


const videosApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getVideos: build.query({
            // ?tags_like=react&tags_like=javascript?q=react
            query: ({tags, searchTerm}) => {
                let queryString = '';
                if(tags?.length > 0) {
                    queryString += tags.map(tag => `tags_like=${tag}`).join('&')
                }

                if(searchTerm !== '') {
                    queryString += `&q=${searchTerm}`
                }

                queryString = `/videos?${queryString}`
                console.log(queryString)

                return queryString;
            },
            keepUnusedDataFor: 500
        })
    }),
})

export const {useGetVideosQuery} = videosApi;