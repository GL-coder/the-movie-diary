import onSwitch from "./on-switch";
import onSearchMovie from "./on-search-movie";
import onCheckDetails from "./on-check-details";
import onSwitchMovieStatus from "./on-switch-movie-status";
import onChangeMovieRating from "./on-change-movie-rating";

import { ActionsType } from "../actions";
import { AppStateType, MovieDataType } from "../types";

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
      return {
        ...state,
        ...onSwitch(action),
      };

    case "ON_SEARCH_MOVIE":
      return {
        ...state,
        ...onSearchMovie(state, action),
      };

    case "ON_CHECK_DETAILS":
      return {
        ...state,
        ...onCheckDetails(state, action),
      };

    case "ON_SWITCH_MOVIE_STATUS":
      return {
        ...state,
        ...onSwitchMovieStatus(state, action),
      };

    case "ON_CHANGE_MOVIE_RATING":
      return {
        ...state,
        ...onChangeMovieRating(state, action),
      };

    default:
      return state;
  }
};

export default reducer;