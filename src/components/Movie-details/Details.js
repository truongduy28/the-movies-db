import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
// import { useEffect } from "react/cjs/react.development";
import "./details.scss";
import { MovieContext } from "../../context/MovieContext";
import Trailer from "../Trailer/Trailer";

const Details = () => {
  const history = useHistory();
  const { id } = useParams();
  const {
    handleGetIdMovie,
    details,
    IMG_PATH,
    trailer,
    handleShowTrailer,
    showTrailer,
    handleWatchNow,
  } = useContext(MovieContext);
  handleGetIdMovie(id);
  // console.log(trailer);
  const genres = details.genres;
  return (
    <>
      <div className="details-movie-container" id="#movie">
        <div className="details-title">
          <p onClick={() => history.push("/")}>
            <i class="fas fa-long-arrow-alt-left"></i> Go back to previous page
          </p>
        </div>
        <div className="details-movie">
          <div className="details-movie-banner">
            <img src={IMG_PATH + details.backdrop_path} />
          </div>
          <div className="details-movie-template">
            <div className="content-img content-details">
              <img src={IMG_PATH + details.poster_path} />
            </div>
            <div className="content-text content-details">
              <h1>
                {details.title} <span> {details.runtime} minutes</span>
              </h1>
              <p className="content-text-tagline">
                <i>"{details.tagline}"</i>
              </p>
              <div className="content-text-genres">
                <p>Genres: &nbsp;</p>
                <div className="list">
                  {details &&
                    details.genres &&
                    genres.map((i) => (
                      <div key={i.id} className="genre">
                        {i.name}
                      </div>
                    ))}
                </div>
              </div>
              <p>
                Languages: <span>{details.original_language}</span>
              </p>
              <div className="content-text-vote">
                <div className="vote-icon">{details.vote_average}</div>
                <div className="vote-views">{details.popularity} views</div>
              </div>
              <div className="content-text-overview">
                <p>Overview</p>
                <span>{details.overview}</span>
              </div>
              <p>Release date: {details.release_date}</p>
              <div className="btn-group">
                <div className="btn btn-watch" onClick={handleWatchNow}>
                  WATCH NOW <i class="fas fa-play"></i>
                </div>
                <div className="btn btn-learn" onClick={handleShowTrailer}>
                  WATCH TRAILER <i class="fas fa-info-circle"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="details-movie-overlay"></div>
        </div>
      </div>
      <Trailer
        trailer={trailer.key}
        showTrailer={showTrailer}
        handleShowTrailer={handleShowTrailer}
      />
    </>
  );
};

export default Details;
