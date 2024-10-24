export const NETFLIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const NETFLIX_USER_ICON_BLUE =
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";

export const NETFLIX_USER_ICON_RED =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxssF8cD36bXo_KnqQR9_OUaIuoGZZngVHHA&s";
export const NETFLIX_USER_ICON_CRY =
  "https://preview.redd.it/sgfxdosc4qo81.png?width=338&format=png&auto=webp&s=68081fe5673ff6ac567a531ae01a786ca80695f6";
export const NETFLIX_BANNER =
  "https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_small.jpg";

export const NETFLIX_GREEN_ICON = 'https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-dyrp6bw6adbulg5b.jpg';

export const NETFLIX_USER_ICON_BLUE_2 ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsnteCs2rONryJBY1S5aBtEnHnvBT_tD1icg&s'



export const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;
export const TMBD_READ_API_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTJhNTAyODk1MTMyZDc5MWIwMTE1NGNmOTBjMDUzMyIsIm5iZiI6MTcyOTA4NDk4NS44NDU0OTksInN1YiI6IjY3MGZiZDc0MDFjODVjNGZkODFhNjYyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hyQFKj0t2GrOVrhhQ5653D_y0WagUvqM38PYJwdPmAs";
export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY;

//TMDB API START-----------------------------------------------------------------------------

export const MOVIES_NOW_PLAYING =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const GET_VIDEOS_BY_ID = "https://api.themoviedb.org/3/movie/";
export const OPTIONS_GET_VIDEOS_BY_ID = "/videos?language=en-US";

export const GET_POPULAR_MOVIES =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export const GET_TOP_RATED_MOVIES =
  "https://api.themoviedb.org/3/movie/top_rated";

export const GET_UPCOMING_MOVIES =
  "https://api.themoviedb.org/3/movie/upcoming";

export const GET_MOVIES_BY_NAME =
  "https://api.themoviedb.org/3/search/movie?query=";
export const GET_MOVIES_FILTER = "&include_adult=false&language=en-US&page=1";

export const GET_MOVIE_DETAILS_BY_ID = "https://api.themoviedb.org/3/movie/";
export const GET_MOVIE_DETAILS_BY_ID_OPTIONS = "?language=en-US";

export const GET_MOVIES_BY_GENRE = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=';


//TMDB API END ---------------------------------------------------------------------------------

export const TMDB_GET_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + TMBD_READ_API_ACCESS_TOKEN,
  },
};

export const TMDB_IMAGE_CDN = "https://image.tmdb.org/t/p/w500";

export const MOVIE_ORIGINAL_LANGUAGE = [
  {
    code: "en",
    languageName: "English",
  },
  {
    code: "ta",
    languageName: "Tamil",
  },
  {
    code: "sp",
    languageName: "Spanish",
  },
];

export const convertMinutesToHour = (minutes) => {
  return minutes / 60;

}
