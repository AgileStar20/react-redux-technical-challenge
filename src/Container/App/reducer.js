import { INIT, FILTER } from "./constants";

const initialState = {
  ramps: [],
  filter: null,
  materials: [],
  areas: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT: {
      const materials = [];
      const { payload: ramps } = action;
      const areas = [];
      ramps.features.forEach(item => {
        const { material } = item.properties;
        if (!materials.includes(material)) {
          materials.push(material);
        }
      });
      ramps.features.forEach(item => {
        const { area_ } = item.properties;
        if (!areas.includes(area_)) {
          areas.push(area_);
        }
      });

      return { ...state, ramps, materials, areas };
    }

    case FILTER: {
      const newState = { ...state, filter: action.payload };
      return newState;
    }

    default:
      return state;
  }
};
