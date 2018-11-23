import { INIT, FILTER, AREAFILTER } from "./constants";

export const initAction = payload => ({
  type: INIT,
  payload
});

export const filterAction = payload => ({
  type: FILTER,
  payload
});

export const areaFilterAction = payload => ({
  type: AREAFILTER,
  payload
});
