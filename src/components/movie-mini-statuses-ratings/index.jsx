import React from "react";

import "./style.scss";

const MovieMiniStatusesRatings = ({ statuses, ratings }) => {
  let items = [];

  for (const key in statuses) {
    if (key !== "delete") {
      let isActive = statuses[key];

      let classNames = "movie-items__mini-rating-item btn";
      classNames += isActive ? " active" : "";

      let item = (
        <div key={key} className={classNames}>
          {key}

          {ratings[key] !== undefined && isActive ? (
            <div className="movie-items__mini-rating-number">
              {ratings[key]}
            </div>
          ) : null}
        </div>
      );

      items.push(item);
    }
  }

  return <div className="movie-items__mini-ratings">{items}</div>;
};

export default MovieMiniStatusesRatings;
