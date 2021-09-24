import Faker from "faker";
import { COLOR_TYPES } from "../types";

const fetchColors = () => {
  const request = ["red", "green", "blue"];

  return {
    type: COLOR_TYPES.FETCH_COLORS,
    payload: request,
  };
};

export default {
  fetchColors,
};
