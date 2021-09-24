import { COLOR_TYPES } from "../types";

const colorReducers = (state = [], action) => {
  switch (action.type) {
    case COLOR_TYPES.FETCH_COLORS:
      return action.payload;
    default:
      return state;
  }
};

export default colorReducers;