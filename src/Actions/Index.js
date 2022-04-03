export const logIn = (user) => {
  return {
    type: "LOG_IN",
    payload: user,
  };
};

export const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};
