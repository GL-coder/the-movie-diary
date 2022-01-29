import { AppStateType } from "../types/";
import { OnSwitchActionType } from "../actions/";

type ReducerType = (
  state: AppStateType,
  action: OnSwitchActionType
) => AppStateType;

const onSwitch: ReducerType = (state, action) => {
  const { keyValue, value } = action.payload;

  return {
    ...state,
    [keyValue]: value,
  };
};

export default onSwitch;
