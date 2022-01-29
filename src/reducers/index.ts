import onSwitch from "./on-switch";
import onSearchMovie from "./on-search-movie";
import onCheckDetails from "./on-check-details";
import onToggleMovieStatus from "./on-toggle-movie-status";
import onChangeMovieRating from "./on-change-movie-rating";

import { ActionsType } from "../actions/";
import { AppStateType, MovieDataType } from "../types/";

type CheckLocalStorageReturnType = string | Array<MovieDataType> | MovieDataType;

const checkLocalStorage = (keyValue: string): CheckLocalStorageReturnType | undefined => {
  return localStorage.hasOwnProperty("theMovieDiaryData")
    ? JSON.parse(localStorage.getItem("theMovieDiaryData")!)[keyValue]
    : undefined;
};

const initialState: AppStateType = {
  page: (checkLocalStorage("page") || "") as string,

  movieFilter: (checkLocalStorage("movieFilter") || "all") as string,

  moviesData: (checkLocalStorage("moviesData") || []) as Array<MovieDataType>,

  selectedMovie: (checkLocalStorage("selectedMovie") as MovieDataType) || null,
};

const reducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case "ON_SWITCH":
      return onSwitch(state, action);

    case "ON_SEARCH_MOVIE":
      return onSearchMovie(state, action);

    case "ON_CHECK_DETAILS":
      return onCheckDetails(state, action);

    case "ON_SWITCH_MOVIE_STATUS":
      return onToggleMovieStatus(state, action);

    case "ON_CHANGE_MOVIE_RATING":
      return onChangeMovieRating(state, action);

    default:
      return state;
  }
};

export default reducer;