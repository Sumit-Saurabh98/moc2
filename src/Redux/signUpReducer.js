import { SIGNUP_SUCCESS, SIGNUP_FAILURE } from './types';

const initialState = {
  signedUp: false,
  error: null,
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signedUp: true,
        error: null,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        signedUp: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default signUpReducer;
