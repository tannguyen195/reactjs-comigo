import * as types from './types';


export function signInSuccess() {
    return {
        type: types.SIGN_IN_SUCCESS
    }
}

export function logout() {
    return {
        type: types.LOG_OUT
    }
}

