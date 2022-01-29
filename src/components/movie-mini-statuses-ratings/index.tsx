import React from "react";

import { RatingsType, StatusesType } from "../../types";

import "./style.scss";

type PropsType = {
  statuses: StatusesType;
  ratings: RatingsType
}

const MovieMiniStatusesRatings: React.FC<PropsType> = ({
  statuses,
  ratings,
}) => {
  let items = [];

  for (const key in statuses) {
    if (key !== "delete") {
      let isActive = statuses[key as keyof typeof statuses];

      let classNames = "movie-items__mini-rating-item btn";
      classNames += isActive ? " active" : "";

      let item = (
        <div key={key} className={classNames}>
          {key}

          {ratings[key as keyof typeof ratings] !== undefined && isActive ? (
            <div className="movie-items__mini-rating-number">
              {ratings[key as keyof typeof ratings]}
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