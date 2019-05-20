
import { combineReducers } from 'redux';
import toggle from './toggle'
import user from './user'
import project from './project'
import file from './file'
import people from './people'
import job from './job'

const rootReducer = combineReducers({
    ...user,
    ...project,
    ...file,
    ...people,
    ...toggle,
    ...job
});

export default rootReducer;
