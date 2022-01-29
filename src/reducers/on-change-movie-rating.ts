import updateMovieData from "./update-movie";

import { AppStateType } from "../types/";
import { OnChangeMovieRatingActionType } from "../actions/";

type ReducerType = (
  state: AppStateType,
  action: OnChangeMovieRatingActionType
) => AppStateType;

const onChangeMovieRating: ReducerType = (state, action) => {
  const { moviesData, selectedMovie } = state;
  const { keyValue, newValue } = action.payload;

  let value = newValue;

  if (value <= 0) {
    value = 1;
  } else if (newValue >= 1000) {
    value = 999;
  }

  const updatedRatings = {
    ...selectedMovie!.ratings,
    [keyValue]: value,
  };

  const updatedMovie = {
    ...selectedMovie!,
    ratings: updatedRatings,
  };

  const movieIndex = moviesData.findIndex(
    ({ linkTo }) => linkTo === updatedMovie.linkTo
  );

  return {
    ...state,
    moviesData: updateMovieData(moviesData, updatedMovie, movieIndex),
    selectedMovie: updatedMovie,
  };
};

export default onChangeMovieRating;