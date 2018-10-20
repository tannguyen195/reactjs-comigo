
import { combineReducers } from 'redux';
import toggle from './toggle'
import user from './user'
import project from './project'
import file from './file'
import people from './people'

const rootReducer = combineReducers({
    ...user,
    ...project,
    ...file,
    ...people,
    ...toggle
});

export default rootReducer;
