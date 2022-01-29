import { AppStateType } from "../types/";
import { OnCheckDetailsActionType } from "../actions/";

type ReducerType = (
  state: AppStateType,
  action: OnCheckDetailsActionType
) => AppStateType;

const onCheckDetails: ReducerType = (state, action) => {
  document.body.scrollTop = document.documentElement.scrollTop = 0;

  const checkMovieInData = state.moviesData.find(
    ({ linkTo }) => linkTo === action.payload
  );

  if (checkMovieInData === undefined) {
    return {
      ...state,
      moviesData: [state.selectedMovie!, ...state.moviesData],
      page: "details",
    };
  } else {
    return {
      ...state,
      selectedMovie: checkMovieInData,
      page: "details",
    };
  }
};

export default onCheckDetails;