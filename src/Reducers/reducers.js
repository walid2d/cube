import { combineReducers } from "redux";
import { reducer } from "redux-form";
import authReducers from "./authReducers";
export default combineReducers({
  auth: authReducers,
  form: reducer,
});
