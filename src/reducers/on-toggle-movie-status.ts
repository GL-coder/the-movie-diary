import updateMovieData from "./update-movie";

import { AppStateType } from "../types/";
import { OnToggleMovieStatusActionType } from "../actions/";

type ReducerType = (
  state: AppStateType,
  action: OnToggleMovieStatusActionType
) => AppStateType;

const onToggleMovieStatus: ReducerType = (state, action) => {
  const { moviesData, selectedMovie } = state;
  const { keyValue, status } = action.payload;

  const updatedStatuses = { ...selectedMovie!.statuses, [keyValue]: status };
  const updatedMovie = {
    ...selectedMovie!,
    statuses: updatedStatuses,
  };

  const movieIndex = moviesData.findIndex(
    ({ linkTo }) => linkTo === updatedMovie.linkTo
  );

  if (keyValue !== "delete") {
    return {
      ...state,
      moviesData: updateMovieData(moviesData, updatedMovie, movieIndex),
      selectedMovie: updatedMovie,
    };
  } else {
    return {
      ...state,
      moviesData: updateMovieData(moviesData, null, movieIndex),
      page: "",
      selectedMovie: null,
    };
  }
};

export default onToggleMovieStatus;