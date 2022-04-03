const intialState = {
  isLoggedIn: null,
};

export default (state = intialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, isLoggedIn: true };
    case "LOG_OUT":
      return { ...state, isLoggedIn: false };

    default:
      return state;
  }
};
