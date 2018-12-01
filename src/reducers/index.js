import { combineReducers } from "redux";
import errorReducers from "./errorReducers";
import projectReducers from "./projectReducers";

export default combineReducers({
    errors: errorReducers,
    project : projectReducers
});
