import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { onSwitchMovieStatus, onChangeMovieRating } from "../../actions/";

import "./style.scss";

type PropsType = {
  keyValue: string;
  text: string;
  status: boolean;
  rating: number;
};

const MovieStatusSwitchesItem: React.FC<PropsType> = ({
  keyValue,
  text,
  status,
  rating,
}) => {
  const dispatch = useDispatch();

  let btnClassNames = "movie-status-switches__item btn";
  btnClassNames += status ? " active" : "";

  const btnHandler = () => dispatch(onSwitchMovieStatus(keyValue, !status));

  const btnItem = (
    <button className={btnClassNames} onClick={btnHandler}>
      {text}
    </button>
  );
  const linkItem = (
    <Link
      to="/"
      className={btnClassNames + " active delete"}
      onClick={btnHandler}
    >
      {text}
    </Link>
  );

  const ratingMinusHandler = () => {
    dispatch(onChangeMovieRating(keyValue, rating - 1));
  };
  const ratingInputHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    onBlurActivated = false
  ) => {
    dispatch(onChangeMovieRating(keyValue, +e.target.value, onBlurActivated));
  };
  const ratingPlusHandler = () => {
    dispatch(onChangeMovieRating(keyValue, rating + 1));
  };

  const ratingItem = (
    <div className="movie-status-switches__rating">
      <button disabled={rating <= 1} onClick={ratingMinusHandler}>
        —
      </button>

      <input
        type="number"
        value={rating}
        onChange={ratingInputHandler}
        onBlur={(e) => ratingInputHandler(e, true)}
      />

      <button disabled={rating >= 999} onClick={ratingPlusHandler}>
        +
      </button>
    </div>
  );

  const items = (
    <>
      {keyValue === "delete" ? linkItem : btnItem}

      {keyValue !== "delete" && keyValue !== "watched" && status
        ? ratingItem
        : null}
    </>
  );

  return <div className="movie-status-switches__box">{items}</div>;
};

export default MovieStatusSwitchesItem;