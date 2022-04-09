const intialState = {
  isLoggedIn: null,
  userName: null,
  userId: null,
  userPfp: null,
};
// this reducer, depending on the action checks for if the current user is logged and changes the state
export default (state = intialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        isLoggedIn: true,
        userId: action.payload.googleId,
        userName: action.payload.givenName,
        userPfp: action.payload.imageUrl,
      };
    case "LOG_OUT":
      return {
        ...state,
        isLoggedIn: false,
        userId: null,
        userName: null,
        userPfp: null,
      };

    default:
      return state;
  }
};
