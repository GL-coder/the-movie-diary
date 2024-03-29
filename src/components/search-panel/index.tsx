import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import MovieItem from "../movie-item/";
import Spinner from "../spinner/";

import MovieAPI from "../../api/movieAPI";

import { onSearchMovie } from "../../actions/";

import { MovieDataType } from "../../types/";

import "./style.scss";

type PropsType = {
  selectedMovie: MovieDataType | null;
};

const SearchPanel: React.FC<PropsType> = ({ selectedMovie }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const [prevSearchTitle, setPrevSearchTitle] = useState<string | null>(null);
  const [prevSearchYear, setPrevSearchYear] = useState<string | null>(null);

  const dispatch = useDispatch();

  const titleInputRef = useRef<HTMLInputElement>(null);
  const yearInputRef = useRef<HTMLInputElement>(null);
  const searchBtnRef = useRef<HTMLButtonElement>(null);

  const searchMessageStatusRef = useRef("Enter movie title...");

  useEffect(() => {
    if (!hasError) {
      if (titleInputRef?.current?.value === "") {
        searchMessageStatusRef.current = "You haven't entered movie title...";
      } else if (
        yearInputRef?.current?.value !== "" &&
        yearInputRef?.current?.value?.length !== 4
      ) {
        searchMessageStatusRef.current = "You have entered an invalid year...";
      } else if (selectedMovie === null) {
        searchMessageStatusRef.current =
          "You have entered the wrong movie title or year or just the movie is not in the API...";
      }
    }
  });

  const statusContent = isLoading ? (
    <Spinner />
  ) : (
    <p>{searchMessageStatusRef.current}</p>
  );

  const contentItem =
    titleInputRef?.current?.value &&
    selectedMovie !== null &&
    !isLoading &&
    !hasError ? (
      <MovieItem movieData={selectedMovie} />
    ) : (
      statusContent
    );

  const inputHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") searchBtnRef?.current?.click();
  };

  const searchBtnHandler = () => {
    if (!isLoading) {
      const title = titleInputRef?.current?.value!;
      const year = yearInputRef?.current?.value!;

      if (title.toLowerCase() !== prevSearchTitle || year !== prevSearchYear) {
        setIsLoading(true);
        setHasError(false);

        setPrevSearchTitle(title?.toLowerCase());
        setPrevSearchYear(year);

        const movieAPI = new MovieAPI();

        const url = title.replace(/\s/g, "+");

        movieAPI
          .getResource(url, year)
          .then((fullMovieData) => {
            dispatch(onSearchMovie(fullMovieData, title));
          })
          .catch(() => {
            setHasError(true);
            searchMessageStatusRef.current =
              "Error.. Check your internet connection...";
          })
          .finally(() => {
            setTimeout(() => {
              setIsLoading(false);
            }, 600);
          });
      }
    }
  };

  return (
    <div className="search-panel">
      <div className="container">
        <div className="content">
          <div className="search-panel__items">
            <input
              disabled={isLoading}
              type="text"
              placeholder="Movie title"
              ref={titleInputRef}
              onKeyUp={inputHandler}
            />
            <input
              disabled={isLoading}
              type="text"
              placeholder="year (optional)"
              ref={yearInputRef}
              onKeyUp={inputHandler}
            />
            <button
              ref={searchBtnRef}
              onClick={searchBtnHandler}
              disabled={isLoading}
            >
              Search
            </button>
          </div>

          <div className="search-panel__content">{contentItem}</div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SearchPanel);