import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    searchTerm: '',
    tags: []
}

const searchAndFilter = createSlice({
    name: 'searchAndFilter',
    initialState,
    reducers: {
        selectTag: (state, action) => {
            state.tags.push(action.payload)
        },
        removeTag: (state, action) => {
            const indexOfRemoveItem = state.tags.indexOf(action.payload)
            if(indexOfRemoveItem !== -1) {
                state.tags.splice(indexOfRemoveItem, 1)
            }
        },
        performSearch: (state, action) => {
            state.searchTerm = action.payload
        }
    }
})

export default searchAndFilter.reducer;
export const {selectTag, removeTag, performSearch} = searchAndFilter.actions;
