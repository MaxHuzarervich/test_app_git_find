import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchRepositories = createAsyncThunk('repos/fetchRepos',
    async (param, {dispatch, rejectedWithValue}) => {
        const api = 'https://api.github.com/search/repositories?q=';
        try {
            const response = await fetch(`${api}/${param}`);
            if (!response.ok) {
                throw new Error('Server Error');
            }
        } catch (e) {
            return rejectedWithValue(e.message)
        }
    })

const slice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        getRepositories(state, action) {
            state.repos.push(action.payload)
        }
    }
})

const {getRepositories} = slice.actions;

export default slice.reducer;