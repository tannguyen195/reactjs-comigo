import { all, fork } from 'redux-saga/effects';
import user from './user';
import project from './project'
import file from './file'
/**
 * rootSaga
 */
export default function* root() {
    yield all([
        fork(user),
        fork(project),
        fork(file)
    ]);
}
