import React from "react";

import { MovieDataType } from "../../types";

import MovieStatusSwitches from "../movie-status-switches/";

import "./style.scss";

type PropsType = {
  selectedMovie: MovieDataType
};

const MovieDetails: React.FC<PropsType> = ({ selectedMovie }) => {
  const { Poster, statuses, ratings, linkTo, ...dataToShow } = selectedMovie;

  const dataKeys = Object.keys(dataToShow);

  const detailsItems = dataKeys.map((key) => {
    return (
      <div key={key} className="movie-details__info-item">
        <b>{key}: </b>
        <span>{selectedMovie[key as keyof typeof dataToShow]};</span>
      </div>
    );
  });

  return (
    <div className="movie-details">
      <div className="container">
        <div className="content">
          <div className="movie-details__items">
            <div className="movie-details__poster">
              <img
                src={Poster}
                alt={dataToShow.Title + " ...[error: no access to photo]"}
              />
            </div>
            <div className="movie-details__info">{detailsItems}</div>
          </div>

          <MovieStatusSwitches statuses={statuses} ratings={ratings} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;