import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import LoginReducer from './loginReducer';
import listpostReducer from './listReducer';

export default combineReducers({
    user: UserReducer,
    loginForm: LoginReducer,
    list: listpostReducer
})