import { OnSwitchActionType} from "./../actions/";

const onSwitch = (action: OnSwitchActionType) => {
  const {keyValue, value} = action.payload;

  return { [keyValue]: value };
};

export default onSwitch;