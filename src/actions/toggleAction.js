import * as types from './types';


export function toggleSignInModal() {
    return {
        type: types.TOGGLE_SIGN_IN_MODAL
    }
}

export function toggleSignUpModal() {
    return {
        type: types.TOGGLE_SIGN_UP_MODAL
    }
}

export function toggleSidebar() {
    return {
        type: types.TOGGLE_SIDEBAR
    }
}


export function toggleSidebarPosition() {
    return {
        type: types.TOGGLE_SIDEBAR_POSITION
    }
}
