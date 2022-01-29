import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { onSwitch } from "../../actions/";

import { AppStateType } from "../../types";

import "./style.scss";

type PropsType = {
  text: string;
  keyValue: string;
}

const MovieFiltersItem: React.FC<PropsType> = ({ text, keyValue }) => {
  const dispatch = useDispatch();

  const movieFilter = useSelector(
    ({ movieFilter }: AppStateType) => movieFilter
  );

  let classNames = "movie-filters__item btn";
  classNames += movieFilter === keyValue ? " active" : "";

  const clickHandler = () => dispatch(onSwitch("movieFilter", keyValue));

  return (
    <button className={classNames} onClick={clickHandler}>
      {text}
    </button>
  );
};

export default MovieFiltersItem;