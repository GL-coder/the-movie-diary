import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import MovieMiniStatusesRatings from "../movie-mini-statuses-ratings";

import { onCheckDetails } from "../../actions/";

import { AppStateType, MovieDataType } from "../../types/";

import "./style.scss";

type PropsType = {
  movieData: MovieDataType;
};

const MovieItem: React.FC<PropsType> = ({
  movieData: { Poster, Title, linkTo, ratings, statuses },
}) => {
  const page = useSelector(({ page }: AppStateType) => page);

  const dispatch = useDispatch();

  const clickHandler = () => dispatch(onCheckDetails(linkTo));

  const items = (
    <>
      <img src={Poster} alt={Title + " ...[error: no access to photo]"} />

      {page === "" ? (
        <MovieMiniStatusesRatings ratings={ratings} statuses={statuses} />
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