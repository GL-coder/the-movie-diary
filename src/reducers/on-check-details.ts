import { AppStateType } from "./../types/";
import { OnCheckDetailsActionType } from "./../actions/";

const onCheckDetails = (
  state: AppStateType,
  action: OnCheckDetailsActionType
) => {
  document.body.scrollTop = document.documentElement.scrollTop = 0;

  const checkMovieInData = state.moviesData.find(
    ({ linkTo }) => linkTo === action.payload
  );

  if (checkMovieInData === undefined) {
    return {
      moviesData: [state.selectedMovie!, ...state.moviesData],
      page: "details",
    };
  } else {
    return {
      selectedMovie: checkMovieInData,
      page: "details",
    };
  }
};

export default onCheckDetails;