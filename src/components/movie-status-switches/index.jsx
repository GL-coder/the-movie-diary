import React from "react";

import MovieStatusSwitchesItem from "../movie-status-switches-item/";

import "./style.scss";

const MovieStatusSwitches = ({ statuses, ratings }) => {
  const statusesData = {
    favorite: "favorite",
    watched: "watched",
    next: "next to watch",
    delete: "delete",
  };

  const statusesKeys = Object.keys(statusesData);

  const items = statusesKeys.map((keyValue) => {
    return (
      <MovieStatusSwitchesItem
        key={keyValue}
        keyValue={keyValue}
        text={statusesData[keyValue]}
        status={statuses[keyValue]}
        rating={ratings[keyValue]}
      />
    );
  });

  return <div className="movie-status-switches">{items}</div>;
};

export default MovieStatusSwitches;