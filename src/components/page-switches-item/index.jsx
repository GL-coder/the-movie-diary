import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { onSwitch } from "../../actions/";

import "./style.scss";

const PageSwitchesItem = ({ text, keyValue }) => {
  const dispatch = useDispatch();

  const page = useSelector(({ page }) => page);

  let classNames = "page-switches__item btn";
  classNames += keyValue === page ? " active" : "";

  const clickHanlder = () => {
    dispatch(onSwitch("page", keyValue));
  };

  return (
    <Link to={`/${keyValue}`} className={classNames} onClick={clickHanlder}>
      {text}
    </Link>
  );
};

export default PageSwitchesItem;
