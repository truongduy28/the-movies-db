import React, { useContext } from "react";
import "./banner.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { MovieContext } from "../../context/MovieContext";

const Banner = () => {
  const { banner, IMG_PATH } = useContext(MovieContext);
  return (
    <>
      {banner ? (
        <div className="banner-container">
          <img src={IMG_PATH + banner.backdrop_path} alt="" />
          <div className="banner-overlay overlay"></div>
          <div className="banner-content">
            <h2>
              {banner.title}
              <span>
                &nbsp;<i class="fas fa-film"></i>
              </span>
            </h2>
            <p>Releases date: {banner.release_date}</p>
            <p>
              Language:
              <span className="icon-tmdb">{banner.original_language}</span>
            </p>
            <p>
              Vote: {banner.vote_average}
              <span>
                &nbsp;<i class="fas fa-star"></i>
              </span>
            </p>
            <p>
              Overview: <i>{banner.overview}</i>
            </p>
            <p>
              Popularity: {banner.popularity} views
              <span>
                &nbsp; <i class="fas fa-eye"></i>
              </span>
            </p>
            <div className="btn-group">
              <div className="btn-group">
                <div className="btn btn-watch">
                  <Link to={`/movie/${banner.id}`}>
                    WATCH NOW <i class="fas fa-play"></i>
                  </Link>
                </div>
                <div className="btn btn-learn">
                  <Link to="{`/movie-details/${banner.id}`}">
                    LEARN MORE <i class="fas fa-info-circle"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <center>Data loading</center>
      )}
    </>
  );
};

export default Banner;
