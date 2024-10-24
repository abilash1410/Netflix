import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const moviesSlice = createSlice({
    name:'moviesSlice',
    initialState:{
        moviesNow:null,
        trailerVideo:[{}],
        popularMovies:[{}],
        topRatedMovies:[{}],
        upComingMovies:[{}],
        storeSingleMovieDetails:null,
        trailerForMovieDetails:[{}],
        genreSpecificMovie:[{}],
    },
    reducers:{
        addMoviesNowPlaying: (state,action) => {
            state.moviesNow = action.payload;
        },
        addPopularMovies: (state,action) => {
            state.popularMovies = action.payload;
        },
        removeMoviesNowPlaying:(state,action) => {
            state.moviesNow = null;
        },
        addTrailerVideo:(state,action) =>{
            state.trailerVideo = null;
            state.trailerVideo = action.payload;
        },addTopRatedMovies: (state,action) =>{
            state.topRatedMovies = action.payload
        },addUpComingMovies: (state,action) =>{
            state.upComingMovies = action.payload
        },addSingleMovieDetail : (state,action) => {
            state.storeSingleMovieDetails = action.payload;
        },addTrailerForMovieDetails:(state,action) => {
            state.trailerForMovieDetails = null;
            state.trailerForMovieDetails = action.payload;
        },addGenreSpecificMovies:(state,action) => {
            state.genreSpecificMovie = null;
            state.genreSpecificMovie = action.payload;
        },removeTrailerForDetails(state,action){
            state.genreSpecificMovie = [{}];
            state.trailerForMovieDetails = [{}];
        }
    }
});

export const {addMoviesNowPlaying,removeMoviesNowPlaying,addTrailerVideo,addPopularMovies
    ,addTopRatedMovies,addUpComingMovies,addSingleMovieDetail,addTrailerForMovieDetails,addGenreSpecificMovies,removeTrailerForDetails} = moviesSlice.actions;
export default moviesSlice.reducer;