import {
  RESET_GRILL,
  SET_GRILL_ITEMS,
  SET_GRILL_SIZE,
  SET_OUT_OF_GRILL_ITEMS
} from "./actions";

const initialState = {
  size: [100, 100],
  grill: [],
  outOfGrill: []
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_GRILL_ITEMS:
      return {
        ...state,
        grill: payload
      };

    case SET_OUT_OF_GRILL_ITEMS:
      return {
        ...state,
        outOfGrill: payload
      };

    case SET_GRILL_SIZE:
      return {
        ...state,
        size: payload
      };

    case RESET_GRILL:
      return { ...initialState };

    default:
      return state;
  }
};

export default reducer;
