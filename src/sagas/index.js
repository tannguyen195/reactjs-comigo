import { all, fork } from 'redux-saga/effects';
import user from './user';
import project from './project'
/**
 * rootSaga
 */
export default function* root() {
    yield all([
        fork(user),
        fork(project)
    ]);
}
