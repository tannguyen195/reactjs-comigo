import { all, fork } from 'redux-saga/effects';
import user from './user';
import project from './project'
import file from './file'
import people from './people'
import job from './job'
/**
 * rootSaga
 */
export default function* root() {
    yield all([
        fork(user),
        fork(project),
        fork(file),
        fork(people),
        fork(job)
    ]);
}
