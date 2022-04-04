import { combineReducers } from "redux";
import { reducer } from "redux-form";
import authReducers from "./authReducers";
import streamReducer from "./streamReducer";
export default combineReducers({
  auth: authReducers,
  form: reducer,
  streams: streamReducer,
});
