import React from "react";
import MovieSuggestion from "./MovieSuggestion";
import { NETFLIX_BANNER } from "../../utils/constants";
import MovieSearch from "./MovieSearch";

const Search = () => {
  return (
    <div>
      <div className="-mt-24 -z-10 fixed">
        <img alt="netflix-banner" src={NETFLIX_BANNER}></img>
      </div>
      <MovieSearch></MovieSearch>
    <MovieSuggestion></MovieSuggestion>
   
    
    </div>
  );
};

export default Search;
