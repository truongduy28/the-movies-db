import React from "react";
import "./movie.scss";
import { Link } from "react-router-dom";

const Movie = (props) => {
  const movieData = props.movieProps;
  const IMG_PATH = props.IMG_PATH;

  return (
    <>
      <div className="movie-container">
        <div className="movie-img">
          <img src={IMG_PATH + movieData.poster_path} />
          <span>{movieData.vote_average}</span>
        </div>
        <h5>{movieData.title}</h5>
        <i>{movieData.release_date}</i>
        <div class="overlay">
          <div class="btn-group">
            <div className="btn btn-view">
              <Link to={`/movie/${movieData.id}`}>Watch now</Link>
            </div>
            <div className="btn btn-learn">
              <Link to={`/movie/${movieData.id}`}>Learn more</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
