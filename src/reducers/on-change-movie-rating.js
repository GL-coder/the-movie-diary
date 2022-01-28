import updateMovieData from './update-movie';

const onChangeMovieRating = (
  { moviesData, selectedMovie },
  { keyValue, newValue, onBlurActivated }
) => {
  let value = newValue;

  if (value <= 0 && onBlurActivated) {
    value = 1;
  } else if (newValue >= 1000) {
    value = 999;
  }

  const updatedRatings = {
    ...selectedMovie.ratings,
    [keyValue]: value,
  };

  const updatedMovie = {
    ...selectedMovie,
    ratings: updatedRatings,
  };

  const movieIndex = moviesData.findIndex(
    ({ linkTo }) => linkTo === updatedMovie.linkTo
  );

  return {
    moviesData: updateMovieData(moviesData, updatedMovie, movieIndex),
    selectedMovie: updatedMovie,
  };
};

export default onChangeMovieRating;