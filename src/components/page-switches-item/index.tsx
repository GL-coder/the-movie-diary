import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { onSwitch } from "../../actions/";

import { AppStateType } from "../../types/";

import "./style.scss";

type PropsType = {
  text: string;
  keyValue: string;
}

const PageSwitchesItem: React.FC<PropsType> = ({ text, keyValue }) => {
  const dispatch = useDispatch();

  const page = useSelector(({ page }: AppStateType) => page);

  let classNames = "page-switches__item btn";
  classNames += keyValue === page ? " active" : "";

  const clickHanlder = () => dispatch(onSwitch("page", keyValue));

  return (
    <Link to={`/${keyValue}`} className={classNames} onClick={clickHanlder}>
      {text}
    </Link>
  );
};

export default PageSwitchesItem;