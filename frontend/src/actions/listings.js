import axios from "axios";
import { FETCH_LISTINGS, FETCH_LISTING, BASE_URL } from "./types";

// FETCH LISTINGS
export const fetchListings = () => dispatch => {
  axios
    .get(`${BASE_URL}/api/listings/`)
    .then(res => {
      dispatch({
        type: FETCH_LISTINGS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// FETCH LISTING
export const fetchListing = slug => dispatch => {
  axios
    .get(`${BASE_URL}/api/listings/${slug}/`)
    .then(res => {
      dispatch({
        type: FETCH_LISTING,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
