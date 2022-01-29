import React from "react";

import MovieStatusSwitchesItem from "../movie-status-switches-item/";

import { RatingsType, StatusesType } from "../../types";

import "./style.scss";

type PropsType = {
  statuses: StatusesType;
  ratings: RatingsType;
};

const MovieStatusSwitches: React.FC<PropsType> = ({ statuses, ratings }) => {
  const statusesData = {
    favorite: "favorite",
    watched: "watched",
    next: "next to watch",
    delete: "delete",
  };

  const statusesKeys = Object.keys(statusesData);

  const items = statusesKeys.map((keyValue) => {
    const text = statusesData[keyValue as keyof typeof statusesData];
    const status = statuses[keyValue as keyof typeof statuses];
    const rating = ratings[keyValue as keyof typeof ratings];

    return (
      <MovieStatusSwitchesItem
        key={keyValue}
        keyValue={keyValue}
        text={text}
        status={status}
        rating={rating}
      />
    );
  });

  return <div className="movie-status-switches">{items}</div>;
};

export default MovieStatusSwitches;