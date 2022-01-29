import React from "react";

import MovieFiltersItem from "../movie-filters-item/";

import "./style.scss";

const MovieFilters: React.FC = () => {
  const itemsData = [
    { text: "all movies", keyValue: "all" },
    { text: "favorite", keyValue: "favorite" },
    { text: "watched", keyValue: "watched" },
    { text: "next to watch", keyValue: "next" },
  ];

  const items = itemsData.map(({ text, keyValue }) => {
    return <MovieFiltersItem key={keyValue} text={text} keyValue={keyValue} />;
  });

  return (
    <div className="movie-filters">
      <div className="container">
        <div className="content">{items}</div>
      </div>
    </div>
  );
};

export default MovieFilters;