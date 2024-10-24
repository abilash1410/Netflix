import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { languageConfig } from "../../utils/MultiLingual/languageConfig";
import { openAI_Client } from "../../OpenAI/client";
import { getMoviesFromTMDB } from "../../reduxStore/GPTSlice";

import { GET_MOVIES_BY_NAME, TMDB_GET_OPTIONS } from "../../utils/constants";
import { GET_MOVIES_FILTER } from "../../utils/constants";
import MovieSuggestion from "./MovieSuggestion";

const MovieSearch = () => {
  const selectedLang = useSelector((store) => store.AppConfig);
  const searchedData = useRef("");
  const dispatch = useDispatch();
  const searchedMovies = useSelector((store) => store.GPT);

  const searchMovie = (e) => {
    console.log(searchedData.current.value);
    const GPT_Query =
      "Act like a movie recommendation system" +
      searchedData.current.value +
      "give me only 5 results with comma seperated like the given example. example: [terminator,transformers,the substance,finding nemo,ice age-2]";
    GPT_searchResult(GPT_Query);
  };

  const searchMoviesFromTMDB = async (movieName) => {
    const url =
      "https://api.themoviedb.org/3/search/movie?query=" +
      searchedData.current.value +
      "&include_adult=true&language=en-US&page=1";

    //const data = await fetch(GET_MOVIES_BY_NAME+movieName+GET_MOVIES_FILTER,TMDB_GET_OPTIONS);
    const data = await fetch(url, TMDB_GET_OPTIONS);
    const data_json = await data.json();
    return data_json.results;
  };

  const GPT_searchResult = async (GPT_Query) => {
    const moviesGPT = "Maharaja";

    // const chatCompletion = await openAI_Client.chat.completions.create({
    //   messages: [{ role: "user", content: GPT_Query }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log(chatCompletion);
    const moviesArr = moviesGPT.split(",");
    const movieResult = moviesArr?.map((movie) => searchMoviesFromTMDB(movie));
    const resolveAllPromise = await Promise.all(movieResult);

    dispatch(
      getMoviesFromTMDB({
        moviesGPT: moviesArr,
        searchResultsTMDB: resolveAllPromise,
      })
    );
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black bg-gradient-to-r from-red-700 via-black grid to-white grid-flow-col w-1/2 px-10 py-5 bg-opacity-70 rounded-2xl"
        >
          <input
            ref={searchedData}
            placeholder={
              languageConfig[selectedLang.getPreferredLang].searchGPTPlaceholder
            }
            className="p-3 m-2 col-span-10 rounded-lg"
          ></input>
          <button
            className="col-span-2 bg-red-700 text-white font-bold m-2 p-3 rounded-lg hover:bg-opacity-75"
            onClick={(e) => {
              searchMovie(e);
            }}
          >
            {languageConfig[selectedLang.getPreferredLang].searchBtnName}
          </button>
        </form>
      </div>

      { searchedMovies.moviesGPT &&  
        <div className="m-10 bg-black bg-opacity-85 pb-10">
          <MovieSuggestion movieResults={searchedMovies}></MovieSuggestion>
        </div>
      }
    </div>
  );
};

export default MovieSearch;
