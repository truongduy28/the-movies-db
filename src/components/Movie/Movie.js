import React from "react";
import "./movie.scss";

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
            <div className="btn btn-view">Watch now</div>
            <div className="btn btn-learn">Learn more</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
