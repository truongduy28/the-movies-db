import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
    const API_KEY = "c418602932b692d213c21843ee1aae58";
    const FUTURE_API = ` https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
    const IMG_PATH = `https://image.tmdb.org/t/p/original/`;
    const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&include_adult=false&query=`;

    const [movies, setMovies] = useState([]);
    const [banner, setBanner] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    const handleChangeSearch = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSearchMovie = (e) => {
        e.preventDefault();
        const getMoviesSearch = async() => {
            const res = await axios.get(SEARCH_API + searchValue);
            //   console.log(res);
            const dataTerm =
                res && res.data && res.data.results ? res.data.results : [];
            setMovies(dataTerm);
        };
        getMoviesSearch();
    };

    useEffect(() => {
        const getMovieBanner = async() => {
            const res = await axios.get(FUTURE_API);
            //   console.log(res);
            const dataTerm =
                res && res.data && res.data.results ? res.data.results : [];
            const random = dataTerm[(Math.random() * dataTerm.length) | 0];
            setBanner(random);
        };
        getMovieBanner();
    }, []);

    useEffect(() => {
        const getMovies = async() => {
            const res = await axios.get(FUTURE_API);
            //   console.log(res);
            const dataTerm =
                res && res.data && res.data.results ? res.data.results : [];
            setMovies(dataTerm);
        };
        getMovies();
    }, []);

    const valueMoviesContext = {
        movies,
        IMG_PATH,
        banner,
        handleChangeSearch,
        handleSearchMovie,
    };
    return ( <
        >
        <
        MovieContext.Provider value = { valueMoviesContext } > { children } <
        /MovieContext.Provider> <
        />
    );
};
export default MovieContextProvider;