import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { onSwitch } from "../../actions/";

import "./style.scss";

const MovieFiltersItem = ({ text, keyValue }) => {
  const dispatch = useDispatch();

  const movieFilter = useSelector(({ movieFilter }) => movieFilter);

  let classNames = "movie-filters__item btn";
  classNames += movieFilter === keyValue ? " active" : "";

  const clickHandler = () => {
    dispatch(onSwitch("movieFilter", keyValue));
  };

  return (
    <button className={classNames} onClick={clickHandler}>
      {text}
    </button>
  );
};

export default MovieFiltersItem;