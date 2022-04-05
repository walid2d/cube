import streams from "../API/streams";
import routerHistory from "../Util/routerHistory";
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

// instance of axios that handles all the api requests
export const addStream = (formValues) => async (dispatch, getState) => {
  const loginInfo = getState().auth;
  const history = routerHistory;
  const response = await streams.post("/stream/new", {
    ...formValues,
    ...loginInfo,
  });
  dispatch({ type: "CREATE_STREAM", payload: response.data });
  history.push("/");
};
export const getStreams = () => async (dispatch) => {
  const response = await streams.get("/stream/all");
  dispatch({ type: "GET_STREAMS", payload: response.data });
};
export const getOneStream = (id) => async (dispatch) => {
  const response = await streams.get(`/stream/${id}`);
  dispatch({ type: "GET_ONE_STREAM", payload: response.data });
};
export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streams.put(`stream/edit/${id}`, formValues);
  dispatch({ type: "EDIT_STREAM", payload: response.data });
};
export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/stream/delete/${id}`);
  dispatch({ type: "DELETE_STREAM", payload: id });
};
