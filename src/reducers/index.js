import onSwitch from "./on-switch";
import onSearchMovie from "./on-search-movie";
import onCheckDetails from "./on-check-details";
import onSwitchMovieStatus from "./on-switch-movie-status";
import onChangeMovieRating from "./on-change-movie-rating";

const checkLocalStorage = (keyValue) => {
  return localStorage.hasOwnProperty("theMovieDiaryData")
    ? JSON.parse(localStorage.getItem("theMovieDiaryData"))[keyValue]
    : undefined;
};

const initialState = {
  page: checkLocalStorage("page") || "",

  movieFilter: checkLocalStorage("movieFilter") || "all",

  moviesData: checkLocalStorage("moviesData") || [],

  selectedMovie: checkLocalStorage("selectedMovie") || null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ON_SWITCH":
      return {
        ...state,
        ...onSwitch(action),
      };

    case "ON_SEARCH_MOVIE":
      return {
        ...state,
        ...onSearchMovie(state, action.payload),
      };

    case "ON_CHECK_DETAILS":
      return {
        ...state,
        ...onCheckDetails(state, action.payload),
      };

    case "ON_SWITCH_MOVIE_STATUS":
      return {
        ...state,
        ...onSwitchMovieStatus(state, action.payload),
      };

    case "ON_CHANGE_MOVIE_RATING":
      return {
        ...state,
        ...onChangeMovieRating(state, action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
