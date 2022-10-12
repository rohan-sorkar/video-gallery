import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    searchTerm: '',
    filters: []
}

const searchAndFilter = createSlice({
    name: 'searchAndFilter',
    initialState,
    reducers: {

    }
})

export default searchAndFilter.reducer;
export const {} = searchAndFilter.actions;
