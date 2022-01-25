import React from "react";

import MovieItem from "../movie-item/";

import "./style.scss";

const MovieItems = ({ moviesData, movieFilter }) => {
  let items =
    movieFilter === "all"
      ? moviesData
      : moviesData.filter(({ statuses }) => {
          return statuses[movieFilter];
        });

  if (movieFilter === "watched") {
    items.sort((item1, item2) => {
      const _item1 = +item1.Released.slice(-4);
      const _item2 = +item2.Released.slice(-4);

      if (_item1 < _item2) {
        return 1;
      } else {
        return -1;
      }
    });
  } else if (movieFilter === "favorite" || movieFilter === "next") {
    items.sort((item1, item2) => {
      const _item1 = +item1.ratings[movieFilter];
      const _item2 = +item2.ratings[movieFilter];

      if (_item1 < _item2) {
        return -1;
      } else {
        return 1;
      }
    });
  }

  const messageContent = (
    <div className="movie-items__message">
      {movieFilter === "all" ? null : (
        <>
          <p>No matching movies found.</p>
          <p>
            Edit your selected films, activate ' 
            <span>
              {movieFilter === "next" ? "next to watch" : movieFilter}
            </span>
            '.
          </p>
        </>
      )}
      <p>
        If you have not yet selected a movie, then find them by going to the
        page '<span>find a movie</span>'.
      </p>
    </div>
  );

  const itemsContent = items.map((movieData) => {
    return (
      <MovieItem
        key={movieData.linkTo + movieData.Released.slice(-4)}
        movieData={movieData}
      />
    );
  });

  const content = items.length > 0 ? itemsContent : messageContent;

  return (
    <div className="movie-items">
      <div className="container">
        <div className="content">{content}</div>
      </div>
    </div>
  );
};

export default MovieItems;