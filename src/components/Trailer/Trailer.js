import React from "react";
import "./trailer.scss";
// import { MovieContext } from "../../context/MovieContext";

const Trailer = (props) => {
  return (
    <>
      <div
        className={
          props.showTrailer
            ? "trailer-container trailer-active"
            : "trailer-container"
        }
      >
        <div className="trailer-close">
          <div className="trailer-close-icon">
            <p onClick={props.handleShowTrailer}>
              <i class="fas fa-times"></i>
            </p>
          </div>
        </div>
        <iframe
          src={`https://www.youtube.com/embed/${props.trailer}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
      <div
        className={
          props.showTrailer
            ? "trailer-overlay trailer-overlay-active"
            : "trailer-overlay"
        }
        onClick={props.handleShowTrailer}
      ></div>
    </>
  );
};

export default Trailer;
