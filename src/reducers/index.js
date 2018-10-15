
import { combineReducers } from 'redux';

import user from './user'
import project from './project'

const rootReducer = combineReducers({
    ...user,
    ...project
});

export default rootReducer;
