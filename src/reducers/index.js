
import { combineReducers } from 'redux';

import user from './user'
import project from './project'
import file from './file'

const rootReducer = combineReducers({
    ...user,
    ...project,
    ...file
});

export default rootReducer;
