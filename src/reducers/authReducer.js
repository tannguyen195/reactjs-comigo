import * as types from '../actions/types';


const initial = {
    isLoggedIn: false,
    step: 1
}
const authReducer = (state = initial, action) => {
    switch (action.type) {
        case types.SIGN_IN_SUCCESS:

            return {
                isLoggedIn: true
            };

        case types.NEXT_STEP:
            return {
                ...state,
                step: state.step + 1
            };

        case types.PREVIOUS_STEP:
            return {
                ...state,
                step: state.step - 1
            };
        default:
            return state;
    }
};

export default authReducer;
