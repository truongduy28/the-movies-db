import React, { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";
import Movie from "../Movie/Movie";
import "./content.scss";

const Content = () => {
  const { movies, IMG_PATH } = useContext(MovieContext);

  return (
    <>
      <div className="movies-container">
        <div className="title">
          <h2>Popular Movies</h2>
          <hr />
        </div>
        <div className="movies">
          {movies && movies.length > 0 ? (
            movies.map((item) => (
              <Movie key={item.id} movieProps={item} IMG_PATH={IMG_PATH} />
            ))
          ) : (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h3>
                Data loading or not found data you need, please try again...
              </h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Content;
