import { legacy_createStore as createStore, combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signUpReducer from './signUpReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  signUp: signUpReducer,
});

const store = createStore(rootReducer);

export default store;
