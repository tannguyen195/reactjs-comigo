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


export function toggleForgotModal() {
    return {
        type: types.TOGGLE_FORGOT_MODAL
    }
}