import { useSelector } from "react-redux";
import { useMovieTrailer } from "../hook/useCustomHook";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeTrailerForDetails } from "../reduxStore/moviesSlice";

const VideoBackground = ({page,movieID }) => {
  const dispatch = useDispatch();
  useMovieTrailer(page, movieID);
  const mainTrailer = useSelector((store) => store.moviesNow?.trailerVideo[0]);
  const movieDetailsTrailer = useSelector(
    (store) => store.moviesNow.trailerForMovieDetails[0]
  );
  useEffect(() => {
    const removeComponent = dispatch(removeTrailerForDetails());
    return () => removeComponent;
    },[])
    return (
      <div className="-mt-48">
        <iframe
          className="w-screen aspect-video"
          src={
            "https://www.youtube.com/embed/" +(page==='mainTrailer'?mainTrailer?.key:movieDetailsTrailer.key) +
            "?autoplay=1&mute=1&playlist=" +
            (page==='mainTrailer'?mainTrailer?.key:movieDetailsTrailer.key) +
            "&loop=1&controls=0&disablekb=1&rel=0"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        ></iframe>
      </div>
    );
};

export default VideoBackground;
