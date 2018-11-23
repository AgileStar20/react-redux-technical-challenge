import { INIT, FILTER, AREAFILTER } from "./constants";

const initialState = {
  ramps: [],
  filter: null,
  materials: [],
  areas: [],
  areaFilter: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT: {
      const materials = [];
      const { payload: ramps } = action;
      const areas = { "0-50": [], "51-200": [], "201-526": [] };

      ramps.features.forEach(item => {
        const { material } = item.properties;
        if (!materials.includes(material)) {
          materials.push(material);
        }
      });

      ramps.features.forEach(item => {
        const { area_ } = item.properties;
        if (area_ <= 50) {
          areas["0-50"].push(area_);
        } else if (area_ <= 200) {
          areas["51-200"].push(area_);
        } else {
          areas["201-526"].push(area_);
        }
      });

      return { ...state, ramps, materials, areas };
    }

    case FILTER: {
      const newState = { ...state, filter: action.payload };
      return newState;
    }
    case AREAFILTER: {
      const newState = { ...state, areaFilter: action.payload };
      return newState;
    }

    default:
      return state;
  }
};
