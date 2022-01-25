import updateMovieData from "./update-movie";

const onSwitchMovieStatus = (
  { moviesData, selectedMovie, selectedMovie: { statuses } },
  { keyValue, status }
) => {
  const updatedStatuses = { ...statuses, [keyValue]: status };
  const updatedMovie = {
    ...selectedMovie,
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
      selectedMovie: { linkTo: null },
    };
  }
};

export default onSwitchMovieStatus;
