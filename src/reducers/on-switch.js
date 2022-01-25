const onSwitch = (state, { payload: { keyValue, value } }) => {
  switch (keyValue) {
    case "page":
      if (state.page === value) return state;

      return {
        [keyValue]: value,
        selectedMovie: { linkTo: null },
      };

    case "movieFilter":
      return {
        [keyValue]: value,
      };

    default:
      return state;
  }
};

export default onSwitch;
