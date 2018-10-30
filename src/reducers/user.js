import { handleActions } from 'redux-actions';
import { ActionTypes, STATUS, renderMessage } from 'constants/index';
import update from 'immutability-helper'
export const initial = {
    isLoggedIn: null,
    step: 1,
    statusSignUp: STATUS.IDLE,
    statusSignIn: STATUS.IDLE,
    status: STATUS.IDLE,
    message: "",
    data: null,
    token: ""
}

export default {
    user: handleActions({

        // LOGIN ACTION
        [ActionTypes.LOGIN]: (state) => update(state, {
            statusSignIn: { $set: STATUS.RUNNING },
        }),
        [ActionTypes.LOGIN_SUCCESS]: (state, { response }) => {
            return update(state, {
                statusSignIn: { $set: STATUS.SUCCESS },
                isLoggedIn: { $set: true },

            })
        },
        [ActionTypes.LOGIN_ERROR]: (state, { error }) => {
            return update(state, {
                statusSignIn: { $set: STATUS.ERROR },
                message: { $set: error && error.data.message},
                isLoggedIn: { $set: false },
            })
        },
        [ActionTypes.LOGOUT]: (state) => update(state, {
            status: { $set: STATUS.RUNNING },
        }),
        // SIGN UP ACTION
        [ActionTypes.NEXT_STEP]: (state) => update(state, {
            step: { $set: state.step + 1 },
        }),
        [ActionTypes.SIGNUP]: (state) => update(state, {
            statusSignUp: { $set: STATUS.RUNNING },
        }),

        [ActionTypes.SIGNUP_SUCCESS]: (state, { response }) => update(state,
            {
                statusSignUp: { $set: STATUS.SUCCESS },
                data: { $set: response.data },
                token: { $set: response.token }
            })
        ,
        [ActionTypes.SIGNUP_ERROR]: (state, { error }) => update(state, {
            statusSignUp: { $set: STATUS.ERROR },
            message: { $set: renderMessage(error.status) }
        }),

        // GET PROFILE
        [ActionTypes.GET_PROFILE]: (state) => update(state, {
            status: { $set: STATUS.RUNNING },
        }),

        [ActionTypes.GET_PROFILE_SUCCESS]: (state, { response }) => update(state,
            {
                status: { $set: STATUS.SUCCESS },
                data: { $set: response.data }
            })
        ,
        [ActionTypes.GET_PROFILE_ERROR]: (state, { error }) => update(state, {
            status: { $set: STATUS.ERROR },
            message: { $set: renderMessage(error.status) }
        }),

        // UPDATE PROFILE
        [ActionTypes.UPDATE_PROFILE]: (state) => update(state, {
            status: { $set: STATUS.RUNNING },
        }),

        [ActionTypes.UPDATE_PROFILE_SUCCESS]: (state, { response }) => update(state,
            {
                status: { $set: STATUS.SUCCESS },
                data: {
                    $merge: { ...response.data },

                }
            })
        ,
        [ActionTypes.UPDATE_PROFILE_ERROR]: (state, { error }) => update(state, {
            status: { $set: STATUS.ERROR },
            message: { $set: renderMessage(error.status) }
        }),

        // UPDATE PROFILE
        [ActionTypes.VERIFY]: (state) => update(state, {
            status: { $set: STATUS.RUNNING },
        }),

        [ActionTypes.VERIFY_SUCCESS]: (state, { response }) => update(state,
            {
                status: { $set: STATUS.SUCCESS },
                data: {
                    $merge: { verified: true },
                }
            })
        ,
        [ActionTypes.VERIFY_ERROR]: (state, { error }) => update(state, {
            status: { $set: STATUS.ERROR },
            message: { $set: renderMessage(error.status) }
        }),

    }, initial),
};

