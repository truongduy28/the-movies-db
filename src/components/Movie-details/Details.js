import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../../context/MovieContext";
const Details = () => {
  const { id } = useParams();
  const { getDetails } = useContext(MovieContext);
  const abc = getDetails(id);
  return (
    <>
      <div className="details-movie-container">abc</div>
    </>
  );
};

export default Details;
