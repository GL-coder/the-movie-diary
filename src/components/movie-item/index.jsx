import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { onCheckDetails } from "../../actions/";

import "./style.scss";

const MovieItem = ({ movieData: { Poster, Title, linkTo } }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(onCheckDetails(linkTo));
  };

  return (
    <Link
      to={`/details/${linkTo}`}
      className="movie-item"
      onClick={clickHandler}
    >
      <img src={Poster} alt={Title + " ...[error: no access to photo]"} />
    </Link>
  );
};

export default MovieItem;
