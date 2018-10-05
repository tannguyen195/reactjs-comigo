import * as types from './types';


export function signInSuccess() {
    return {
        type: types.SIGN_IN_SUCCESS
    }
}

export function nextStep() {
    return {
        type: types.NEXT_STEP
    }
}

export function previousStep() {
    return {
        type: types.PREVIOUS_STEP
    }
}
export function logout() {
    return {
        type: types.LOG_OUT
    }
}