import { useSelector } from "react-redux";
import { useMoviesNow, usePopularMovies, useTopRatedMovies, useUpComingMovies } from "../hook/useCustomHook";
import Search from "./GPT/Search";
import Header from "./Header";
import PrimaryContainer from "./PrimaryContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const GPT = useSelector((store) => store.GPT);
  const toggleGPT = GPT.toggleGPT;

  useMoviesNow();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <div>
      <Header />
      {
        toggleGPT ?  <Search/> : <> <PrimaryContainer />  <SecondaryContainer /> </>
      }
    </div>
  );
};

export default Browse;
