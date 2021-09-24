import { combineReducers } from "redux";
import colorReducers from "./colorReducers";

const rootReducer = combineReducers({
  colors: colorReducers
});

export default rootReducer;