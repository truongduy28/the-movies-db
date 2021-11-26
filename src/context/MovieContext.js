import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const API_KEY = "c418602932b692d213c21843ee1aae58";
  const FUTURE_API = ` https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
  const IMG_PATH = `https://image.tmdb.org/t/p/original/`;
  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&include_adult=false&query=`;
  const VIDEO_API = `http://api.themoviedb.org/3/movie/550/videos?api_key=${API_KEY}`;

  const [movies, setMovies] = useState([]);
  const [banner, setBanner] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [details, setDetails] = useState("");
  const [idMovie, setIdMovie] = useState("");
  const [trailer, setTrailer] = useState([]);
  const [showTrailer, setShowTrailer] = useState(false);

  const handleShowTrailer = () => {
    setShowTrailer(showTrailer ? false : true);
  };
  const handleWatchNow = () => {
    alert(
      "Temporarily unable to watch the movie, you can only refer to the trailer and the details of the movie "
    );
  };
  const handleGetIdMovie = (id) => {
    setIdMovie(id);
  };

  useEffect(() => {
    const getTrailerMovie = (idMovie) => {
      const getTrailer = async () => {
        const res = await axios.get(
          `http://api.themoviedb.org/3/movie/${idMovie}/videos?api_key=${API_KEY}`
        );
        const dataTerm = res && res.data ? res.data.results[0] : [];
        setTrailer(dataTerm);
      };
      getTrailer();
    };
    getTrailerMovie(idMovie);
  }, [idMovie]);

  useEffect(() => {
    const getDetailMovie = (idMovie) => {
      const getDetails = async () => {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${idMovie}?api_key=${API_KEY}`
        );
        const dataTerm = res && res.data ? res.data : [];
        setDetails(dataTerm);
      };
      getDetails();
    };
    getDetailMovie(idMovie);
  }, [idMovie]);

  const handleChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchMovie = (e) => {
    e.preventDefault();
    getMoviesFunc(SEARCH_API + searchValue, setMovies, false);
  };

  useEffect(() => {
    getMoviesFunc(FUTURE_API, setBanner, true);
  }, []);

  useEffect(() => {
    getMoviesFunc(FUTURE_API, setMovies, false);
  }, []);

  const getMoviesFunc = (api, setState, getOne) => {
    const getMovies = async () => {
      const res = await axios.get(api);
      //   console.log(res);
      const dataTerm =
        res && res.data && res.data.results ? res.data.results : [];
      setState(
        getOne ? dataTerm[(Math.random() * dataTerm.length) | 0] : dataTerm
      );
    };
    getMovies();
  };
  const handleIncomplete = () => {
    alert("The function will be completed as soon as possible, thanks!");
  };
  const valueMoviesContext = {
    movies,
    IMG_PATH,
    banner,
    handleChangeSearch,
    handleSearchMovie,
    details,
    handleGetIdMovie,
    idMovie,
    trailer,
    handleShowTrailer,
    showTrailer,
    handleIncomplete,
    handleWatchNow,
  };
  return (
    <>
      <MovieContext.Provider value={valueMoviesContext}>
        {children}
      </MovieContext.Provider>
    </>
  );
};
export default MovieContextProvider;
