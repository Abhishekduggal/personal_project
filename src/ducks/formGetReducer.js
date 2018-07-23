import axios from "axios";

const GET_FORMS = "GET_FORMS";

export function getForms() {
  return {
    type: GET_FORMS,
    payload: axios.get("/api/forms")
  };
}

const initialState = {
  forms: [],
  isLoading: false,
  didErr: false
};

export default function formsReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_FORMS}_PENDING`:
      return {
        ...state,
        isLoading: true
      };

    case `${GET_FORMS}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        forms: action.payload.data
      };

    case `${GET_FORMS}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        didErr: true
      };
    default:
      return state;
  }
}
