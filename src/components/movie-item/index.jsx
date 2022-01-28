import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import MovieMiniStatusRating from "../movie-mini-status-rating";

import { onCheckDetails } from "../../actions/";

import "./style.scss";

const MovieItem = ({
  movieData: { Poster, Title, linkTo, ratings, statuses },
}) => {
  const page = useSelector(({ page }) => page);

  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(onCheckDetails(linkTo));
  };

  const items = (
    <>
      <img src={Poster} alt={Title + " ...[error: no access to photo]"} />

      {page === "" ? (
        <MovieMiniStatusRating ratings={ratings} statuses={statuses} />
      ) : null}
    </>
  );

  return (
    <Link
      to={`/details/${linkTo}`}
      className="movie-items__item-content"
      onClick={clickHandler}
    >
      {items}
    </Link>
  );
};

export default MovieItem;