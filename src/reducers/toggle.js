import { handleActions } from 'redux-actions';
import { ActionTypes } from 'constants/index';
import update from 'immutability-helper'
export const initial = {
    visibleProject: false
}
export default {
    toggle: handleActions({

        // TOGGLE ACTION
        [ActionTypes.TOGGLE_HOME_VIEW]: (state) => update(state, {
            visibleProject: { $set: !state.visibleProject },
        }),
    }, initial),
};

