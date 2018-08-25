import * as types from '../actions/types';


const initial = {
    visibleSignIn: false,
    visibleSignUp: false,
    visibleForgot: false,
    visibleSidebarPosition: false,
    visibleSidebar: false
}
const toggleReducer = (state = initial, action) => {
    switch (action.type) {

        case types.TOGGLE_SIGN_IN_MODAL:

            return {
                ...state,
                visibleSignIn: !state.visibleSignIn
            };
        case types.TOGGLE_SIGN_UP_MODAL:
            return {
                ...state,
                visibleSignUp: !state.visibleSignUp
            };
        case types.TOGGLE_SIDEBAR:
            return {
                ...state,
                visibleSidebar: !state.visibleSidebar
            };
        case types.TOGGLE_SIDEBAR_POSITION:
            return {
                ...state,
                visibleSidebarPosition: !state.visibleSidebarPosition
            };

        default:
            return state;
    }
};

export default toggleReducer;
