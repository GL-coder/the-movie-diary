import updateMovieData from "./update-movie";

import { AppStateType } from "./../types/";
import { OnSwitchMovieStatusActionType } from "./../actions/";

const onSwitchMovieStatus = (
  { moviesData, selectedMovie }: AppStateType,
  action: OnSwitchMovieStatusActionType
) => {
  const {keyValue, status} = action.payload;

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
      moviesData: updateMovieData(moviesData, updatedMovie, movieIndex),
      selectedMovie: updatedMovie,
    };
  } else {
    return {
      moviesData: updateMovieData(moviesData, null, movieIndex),
      page: "",
      selectedMovie: null,
    };
  }
};

export default onSwitchMovieStatus;