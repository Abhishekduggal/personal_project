import axios from "axios";

const GET_FORMS = "GET_FORMS";
const DELETE_FORM = "DELETE_FORM";
const UPDATE_FORM_VALUE = "UPDATE_FORM_VALUE";

export function updateFormValue(updatedInfo, id) {
  return {
    type: UPDATE_FORM_VALUE,
    payload: axios.patch(`/api/form/field/${id}`, updatedInfo)
  };
}

export function getForms() {
  return {
    type: GET_FORMS,
    payload: axios.get("/api/forms")
  };
}

export function deleteForm(formid) {
  return {
    type: DELETE_FORM,
    payload: axios.delete(`api/form/${formid}`)
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
    case `${DELETE_FORM}_PENDING`:
      return {
        ...state,
        isLoading: true
      };

    case `${GET_FORMS}_FULFILLED`:
    case `${DELETE_FORM}_FULFILLED`:
    case `${UPDATE_FORM_VALUE}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        forms: action.payload.data
      };

    case `${GET_FORMS}_REJECTED`:
    case `${DELETE_FORM}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        didErr: true
      };
    default:
      return state;
  }
}
