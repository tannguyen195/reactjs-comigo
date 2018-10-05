import * as types from '../actions/types';
import update from 'immutability-helper'
const initial = {
    isLoggedIn: false,
    step: 3
}
const authReducer = (state = initial, action) => {
    switch (action.type) {
        case types.SIGN_IN_SUCCESS:
            return {
                isLoggedIn: true
            };
        case types.NEXT_STEP:
            return update(state, {
                step: { $set: state.step + 1}
            })

        case types.PREVIOUS_STEP:
            return {
                ...state,
                step: { $set: state.step - 1 }
            };
        default:
            return state;
    }
};

export default authReducer;
