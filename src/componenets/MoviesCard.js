import React, { useEffect } from "react";
import { GET_MOVIE_DETAILS_BY_ID, GET_MOVIE_DETAILS_BY_ID_OPTIONS, TMDB_GET_OPTIONS, TMDB_IMAGE_CDN } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addSingleMovieDetail } from "../reduxStore/moviesSlice";
import { useNavigate } from "react-router-dom";

const MoviesCard = ({ posterPath, movieID}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
  },[])

  if (!posterPath) return null;

  const fetchMovieDetails = async () => {
    const data = await fetch (GET_MOVIE_DETAILS_BY_ID +movieID+GET_MOVIE_DETAILS_BY_ID_OPTIONS,TMDB_GET_OPTIONS);
    const json_data = await data.json();
    console.log(json_data);
    dispatch(addSingleMovieDetail(json_data));    
    navigate('/movieDetails');
  }

  const moveToMoviesDetails = (e) => {
    console.log(e.target.id);
    fetchMovieDetails ();
  };
  
  return (
    <div className="w-36 md:w-48 pr-4 ">
      <img
        id={movieID}
        onClick={(e) => {
          moveToMoviesDetails(e);
        }}
        className="transition-all duration-300  hover:scale-x-150 hover:scale-y-150"
        alt="Poster-img"
        src={TMDB_IMAGE_CDN + posterPath}
      ></img>
    </div>
  );
};
export default MoviesCard;
