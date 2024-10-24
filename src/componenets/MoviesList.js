import React from "react";
import MoviesCard from "./MoviesCard";

const MoviesList = ({ title,movies }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"> 
        <button className="bg-white rounded"> ← </button>
        <div className="flex cursor-pointer">
          {movies?.map((movie) => (
            <MoviesCard key={movie.id} posterPath={movie.poster_path} movieID = {movie.id}  />
          ))}
        </div>
        <button className="bg-white"> → </button>
      </div>
    </div>
  );
};

export default MoviesList;
