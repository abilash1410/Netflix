import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from "react-redux";
import Shimmer from './Shimmer';

const SecondaryContainer = () => {
  const movieList = useSelector((store) => store.moviesNow);
  if (!movieList.moviesNow) return;
  if (!movieList.popularMovies.length>1) return;
  if(!movieList.topRatedMovies.length>1) return;
  if(!movieList.upComingMovies.length>1) return;

  return !movieList.moviesNow? <Shimmer/>:
  (
      <div className="bg-black w-screen aspect-video">
        <div className="-mt-64 pl-4  relative z-20">
          <MoviesList title={"Now Playing Movies"} movies={movieList.moviesNow} />
          <MoviesList title={"Top Rated Movies"} movies={movieList.topRatedMovies} />
          <MoviesList title={"Popular Movies"} movies={movieList.popularMovies} />
          <MoviesList title={"Upcoming Movies"}  movies={movieList.upComingMovies}/>
        </div>
      </div>  
  )
}

export default SecondaryContainer
