const onSwitch = (keyValue, value) => {
  return {
    type: "ON_SWITCH",
    payload: { keyValue, value },
  };
};

const onSearchMovie = (fullMovieData, title) => {
  return {
    type: "ON_SEARCH_MOVIE",
    payload: { fullMovieData, title },
  };
};

const onCheckDetails = (linkTo) => {
  return {
    type: "ON_CHECK_DETAILS",
    payload: linkTo,
  };
};

const onSwitchMovieStatus = (keyValue, status) => {
  return {
    type: "ON_SWITCH_MOVIE_STATUS",
    payload: { keyValue, status },
  };
};

const onChangeMovieRating = (keyValue, newValue, onBlurActivated) => {
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