import { handleActions } from 'redux-actions';
import { ActionTypes, STATUS, renderMessage } from 'constants/index';
import update from 'immutability-helper'
export const initial = {
    isLoggedIn: false,
    step: 1,
    status: STATUS.IDLE,
    message: "",
    data: {
        lastName: "",
        firstName: "",
        email: ""
    },
    token: ""
}


export default {
    user: handleActions({

        // LOGIN ACTION
        [ActionTypes.LOGIN]: (state) => update(state, {
            status: { $set: STATUS.RUNNING },
        }),
        [ActionTypes.LOGIN_SUCCESS]: (state, { response }) => {
            return update(state, {
                status: { $set: STATUS.SUCCESS },
                isLoggedIn: { $set: true },

            })
        },
        [ActionTypes.LOGIN_ERROR]: (state, { error }) => {
            return update(state, {
                status: { $set: STATUS.ERROR },
                message: { $set: renderMessage(error.status) }
            })
        },

        // SIGN UP ACTION
        [ActionTypes.NEXT_STEP]: (state) => update(state, {
            step: { $set: state.step + 1 },
        }),
        [ActionTypes.SIGNUP]: (state) => update(state, {
            status: { $set: STATUS.RUNNING },
        }),

        [ActionTypes.SIGNUP_SUCCESS]: (state, { response }) => update(state,
            {
                status: { $set: STATUS.SUCCESS },
                data: { $set: response.data },
                token: { $set: response.token }
            })
        ,
        [ActionTypes.SIGNUP_ERROR]: (state, { error }) => update(state, {
            status: { $set: STATUS.ERROR },
            message: { $set: renderMessage(error.status) }
        }),

        // GET PROFILE
        [ActionTypes.GET_PROFILE]: (state) => update(state, {
            status: { $set: STATUS.RUNNING },
        }),

        [ActionTypes.GET_PROFILE_SUCCESS]: (state, { response }) => update(state,
            {
                status: { $set: STATUS.SUCCESS },
            })
        ,
        [ActionTypes.GET_PROFILE_ERROR]: (state, { error }) => update(state, {
            status: { $set: STATUS.ERROR },
            message: { $set: renderMessage(error.status) }
        }),
    }, initial),
};

