import { useDispatch } from "react-redux";
import {
  GET_POPULAR_MOVIES,
  GET_TOP_RATED_MOVIES,
  GET_UPCOMING_MOVIES,
  GET_VIDEOS_BY_ID,
  MOVIES_NOW_PLAYING,
  OPTIONS_GET_VIDEOS_BY_ID,
  TMDB_GET_OPTIONS,
} from "../utils/constants";
import {
  addMoviesNowPlaying,
  addPopularMovies,
  addTopRatedMovies,
  addTrailerForMovieDetails,
  addTrailerVideo,
  addUpComingMovies,
} from "../reduxStore/moviesSlice";
import { useEffect } from "react";

export const useMoviesNow = () => {
  const dispatch = useDispatch();
  const fetchMoviesNow = async () => {
    const fetchMoviesNow = await fetch(MOVIES_NOW_PLAYING, TMDB_GET_OPTIONS);
    const JSON = await fetchMoviesNow.json();
    console.log(JSON.results);
    dispatch(addMoviesNowPlaying(JSON.results));
  };
  useEffect(() => {
    fetchMoviesNow();
  }, []);
};

export const useMovieTrailer = (page,movieID) => {
  const dispatch = useDispatch();
  const fetchMovieTrailer = async () => {
    const data = await fetch(
      GET_VIDEOS_BY_ID + movieID + OPTIONS_GET_VIDEOS_BY_ID,
      TMDB_GET_OPTIONS
    );
    const JSON_data = await data.json();
    const filteredTrailerData = JSON_data.results.filter(
      (movie) => movie.type === "Trailer"
    );
    const trailer = filteredTrailerData.length
      ? filteredTrailerData
      : JSON_data.results[0];
      if(page ==='detailsPageTrailer'){
        dispatch(addTrailerForMovieDetails(trailer));
      }else{
        dispatch(addTrailerVideo(trailer));
      }
  };

  useEffect(() => {
    fetchMovieTrailer();
  }, [movieID]);
};

export const usePopularMovies = () => {
  const dispatch = useDispatch();
  const fetchPopularMovies = async () => {
    const data = await fetch(GET_POPULAR_MOVIES, TMDB_GET_OPTIONS);
    const popularMovies = await data.json();
    dispatch(addPopularMovies(popularMovies.results));
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);
};

export const useTopRatedMovies = async () => {
  const dispatch = useDispatch();
  const fetchTopratedMovies = async () => {
    const data = await fetch(GET_TOP_RATED_MOVIES, TMDB_GET_OPTIONS);
    const json_data = await data.json();
    dispatch(addTopRatedMovies(json_data.results));
  };

  useEffect(() => {
    fetchTopratedMovies();
  }, []);
};

export const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const fetchUpComingMovies = async () => {
    const data = await fetch(GET_UPCOMING_MOVIES, TMDB_GET_OPTIONS);
    const json_data = await data.json();
    dispatch(addUpComingMovies(json_data.results));
  };

  useEffect(() => {
    fetchUpComingMovies();
  }, []);
};
