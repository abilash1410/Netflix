import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import Header from "./Header";
import {
  convertMinutesToHour,
  GET_MOVIES_BY_GENRE,
  MOVIE_ORIGINAL_LANGUAGE,
  TMDB_GET_OPTIONS,
  TMDB_IMAGE_CDN,
} from "../utils/constants";
import MoviesList from "./MoviesList";
import { addGenreSpecificMovies } from "../reduxStore/moviesSlice";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const movieList = useSelector((store) => store.moviesNow);
  const movieDetails = useSelector(
    (store) => store.moviesNow.storeSingleMovieDetails
  );

  const getGenereSpecificMovies = async (genreID) => {
    const data = await fetch(GET_MOVIES_BY_GENRE + genreID, TMDB_GET_OPTIONS);
    const json_data = await data.json();
    dispatch(addGenreSpecificMovies(json_data.results));
  };

  useEffect(() => {
    getGenereSpecificMovies(movieDetails.genres[0].id);
  }, [movieDetails?.genres[0]?.id]);

  const movieLanguage = MOVIE_ORIGINAL_LANGUAGE.filter(
    (movieLang) => movieLang.code === movieDetails?.original_language
  )[0]?.languageName;
  const releaseDate = movieDetails.release_date.split("-")[0];
  const playTime = convertMinutesToHour(movieDetails.runtime) + " hrs";
  //const overview = movieDetails.overview;
  let genreList = "";
  const getGenreByName = (genreItem) => {
    let genre = "";
    genre = genreItem.name;
    if (genre) {
      genreList = genreList + genre + ",";
    }
  };
  movieDetails.genres.map(getGenreByName);
  genreList = genreList.substring(0, genreList.length - 1);

  return (
    <div>
      <Header />
      <div className="bg-black w-screen">
        <VideoTitle
          title={movieDetails.original_title}
          overview={movieDetails.overview}
        />
        <VideoBackground
          page={"detailsPageTrailer"}
          movieID={movieDetails.id}
        />
        <div className="px-10 flex -mt-40 relative bg-black ">
          <div className="">
            <img
              alt="backdrop-img"
              src={TMDB_IMAGE_CDN + movieDetails.backdrop_path}
            ></img>
          </div>
          <div className="p-5 flex flex-col justify-center">
            <h1 className="text-white font-bold justify-center">
              A B O U T | M O V I E
            </h1>
            <h4 className="text-black font-semibold p-1 bg-red-700 bg-gradient-to-r from-yellow-500 h-10">
              {releaseDate + ""}
            </h4>
            <h4 className="text-white font-semibold bg-red-700 p-1 h-10 items-center bg-gradient-to-r from-emerald-700">
              {movieLanguage + ""}
            </h4>
            <h4 className="text-black font-semibold p-1 bg-red-700 bg-gradient-to-r from-yellow-500  h-10 ">
              {genreList}
            </h4>
            <h4 className="text-white font-semibold p-1  bg-red-700 bg-gradient-to-r from-emerald-700 h-10 ">
              {playTime}
            </h4>
            {/* 
          <h4 className="text-white">adult</h4>
          */}
          </div>
          <div></div>
        </div>
        <MoviesList
          title={"Recommended Movies"}
          movies={movieList.genreSpecificMovie}
        />
      </div>
    </div>
  );
};

export default MovieDetails;
