import * as types from '../actions/types';


const initial = {
    visibleSignIn: false,
    visibleSignUp: false,
    visibleForgot: false,
}
const toggleReducer = (state = initial, action) => {
    switch (action.type) {

        case types.TOGGLE_SIGN_IN_MODAL:

            return {
                visibleSignIn: !state.visibleSignIn
            };
        case types.TOGGLE_SIGN_UP_MODAL:
            return {
                visibleSignUp: !state.visibleSignUp
            };
     
        default:
            return state;
    }
};

export default toggleReducer;
