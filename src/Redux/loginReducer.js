import { LOGIN_SUCCESS, LOGIN_FAILURE } from './types';

const initialState = {
  loggedIn: false,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loggedIn: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
