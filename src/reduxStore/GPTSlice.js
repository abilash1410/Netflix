import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "GPTSlice",
  initialState: {
    toggleGPT: false,
    moviesGPT: null,
    searchResultsTMDB: null,
  },
  reducers: {
    toggleGPTSearch: (state, action) => {
      state.toggleGPT = !state.toggleGPT;
    },
    getMoviesFromTMDB: (state, action) => {
      state.moviesGPT = action.payload.moviesGPT;
      state.searchResultsTMDB = action.payload.searchResultsTMDB;
    },
  },
});

export const { toggleGPTSearch, getMoviesFromTMDB} = GPTSlice.actions;
export default GPTSlice.reducer;
