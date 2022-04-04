import streams from "../API/streams";

// action creator for login and log out
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

// instance of axios to add the submitted data to the server
export const addStream = (formValues) => (dispatch) => {
  streams.post("streams", formValues);
};
