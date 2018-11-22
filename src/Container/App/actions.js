import { INIT, FILTER } from "./constants";

export const initAction = payload => ({
  type: INIT,
  payload
});

export const filterAction = payload => ({
  type: FILTER,
  payload
});
