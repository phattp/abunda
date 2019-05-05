import { FETCH_LISTINGS, FETCH_LISTING } from "../actions/types";

const initialState = {
  listings: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_LISTINGS:
      return {
        ...state,
        listings: action.payload
      };
    case FETCH_LISTING:
      return {
        ...state,
        listing: action.payload
      };
    default:
      return state;
  }
}
