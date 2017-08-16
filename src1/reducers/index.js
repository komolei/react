// let a = 1;
// export default a;
import { combineReducers } from 'redux';
import login from './login.js';
import signup from './signup.js';

const appReducer = combineReducers({
    login,
    signup,
})
export default appReducer;