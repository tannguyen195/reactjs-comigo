
import { combineReducers } from 'redux';

import toggleReducer from './toggleReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
    toggleReducer,
    authReducer,
});

export default rootReducer;
