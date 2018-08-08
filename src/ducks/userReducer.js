import axios from "axios";

const initialState = {
  user: {}
};

const GET_USER = "GET_USER";

export function getUser() {
  return {
    type: GET_USER,
    payload: axios.get("/api/get-user")
  };
}

export default function reducer(state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    case `${GET_USER}_FULFILLED`:
      return {
        ...state,
        user: action.payload.data
      };
    case `${GET_USER}_REJECTED`:
      return {
        ...state,
        user: action.payload.response.data
      };
    default:
      return state;
  }
}
