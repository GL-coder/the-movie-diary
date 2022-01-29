import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../header/";
import MovieFilters from "../movie-filters/";
import MovieItems from "../movie-items/";
import SearchPanel from "../search-panel/";
import MovieDetails from "../movie-details/";
import Footer from "../footer/";

import { AppStateType } from "../../types/";

import "./style.scss";

const App: React.FC = () => {
  const state = useSelector((state: AppStateType) => state);

  const { page, movieFilter, moviesData, selectedMovie } = state;

  const [hasPageLoaded, setHasPageLoaded] = useState(false);

  useEffect(() => {
    localStorage.setItem("theMovieDiaryData", JSON.stringify(state));
  });

  useEffect(() => {
    setHasPageLoaded(true);
  }, []);

  return (
    <>
      {!hasPageLoaded ? (
        <Navigate
          to={
            selectedMovie !== null && page === "details"
              ? `/details/${selectedMovie.linkTo}`
              : `/${page}`
          }
        />
      ) : null}

      <div className="app">
        <Header />

        <div className="content-wrapper">
          <Routes>
            <Route
              path="/searching"
              element={<SearchPanel selectedMovie={selectedMovie} />}
            />

            <Route
              path={`/details/${selectedMovie?.linkTo}`}
              element={
                <MovieDetails selectedMovie={selectedMovie!} />
              }
            />

            <Route
              path="/"
              element={
                <>
                  <MovieFilters />

                  <MovieItems
                    movieFilter={movieFilter}
                    moviesData={moviesData}
                  />
                </>
              }
            />
          </Routes>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default App;