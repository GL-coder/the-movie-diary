import { MovieDataType } from "../types";

export type ActionsType = OnSwitchActionType
  | OnSearchMovieActionType
  | OnCheckDetailsActionType
  | OnSwitchMovieStatusActionType
  | OnChangeMovieRatingActionType;

export type OnSwitchActionType = {
  type: "ON_SWITCH";
  payload: {
    keyValue: string;
    value: string;
  };
};
const onSwitch = (keyValue: string, value: string): OnSwitchActionType => {
  return {
    type: "ON_SWITCH",
    payload: { keyValue, value },
  };
};

type OtherMovieAPIData = { Response: string };
type fullMovieDataType = MovieDataType & OtherMovieAPIData;
export type OnSearchMovieActionType = {
  type: "ON_SEARCH_MOVIE";
  payload: {
    fullMovieData: fullMovieDataType;
    title: string;
  };
};
const onSearchMovie = (
  fullMovieData: fullMovieDataType,
  title: string
): OnSearchMovieActionType => {
  return {
    type: "ON_SEARCH_MOVIE",
    payload: { fullMovieData, title },
  };
};

export type OnCheckDetailsActionType = {
  type: "ON_CHECK_DETAILS";
  payload: string;
};
const onCheckDetails = (payload: string): OnCheckDetailsActionType => {
  return {
    type: "ON_CHECK_DETAILS",
    payload,
  };
};

export type OnSwitchMovieStatusActionType = {
  type: "ON_SWITCH_MOVIE_STATUS";
  payload: {
    keyValue: string;
    status: boolean;
  };
};
const onSwitchMovieStatus = (
  keyValue: string,
  status: boolean
): OnSwitchMovieStatusActionType => {
  return {
    type: "ON_SWITCH_MOVIE_STATUS",
    payload: { keyValue, status },
  };
};

export type OnChangeMovieRatingActionType = {
  type: "ON_CHANGE_MOVIE_RATING";
  payload: {
    keyValue: string;
    newValue: number;
    onBlurActivated: boolean;
  };
};
const onChangeMovieRating = (
  keyValue: string,
  newValue: number,
  onBlurActivated: boolean = false
): OnChangeMovieRatingActionType => {
  return {
    type: "ON_CHANGE_MOVIE_RATING",
    payload: { keyValue, newValue, onBlurActivated },
  };
};

export {
  onSwitch,
  onSearchMovie,
  onCheckDetails,
  onSwitchMovieStatus,
  onChangeMovieRating,
};