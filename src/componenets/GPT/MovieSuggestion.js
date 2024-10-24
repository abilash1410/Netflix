import React from "react";
import MoviesList from "../MoviesList";

const MovieSuggestion = ({ movieResults }) => {
  return (
    <div className="">
      <div>
        {movieResults &&
          movieResults.moviesGPT.map((movie, index) => (
            <MoviesList key = {index}
              title={movie}
              movies={movieResults.searchResultsTMDB[index]}
            ></MoviesList>
          ))}
      </div>
    </div>
  );
};

export default MovieSuggestion;
