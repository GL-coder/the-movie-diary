const onSwitch = ({ payload: { keyValue, value } }) => {
  return {
    [keyValue]: value,
  };
};

export default onSwitch;