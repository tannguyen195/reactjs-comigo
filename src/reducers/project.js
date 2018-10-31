import { handleActions } from 'redux-actions';
import { ActionTypes, STATUS, renderMessage } from 'constants/index';
import update from 'immutability-helper'
export const initial = {
    status: STATUS.IDLE,
    message: "",
    list: [],
    detail: null,
    detailList: []
}

export default {
    project: handleActions({

        // CREATE PROJECT ACTION
        [ActionTypes.CREATE]: (state) => update(state, {
            status: { $set: STATUS.RUNNING },
        }),
        [ActionTypes.CREATE_SUCCESS]: (state, { response }) => {
            return update(state, {
                status: { $set: STATUS.SUCCESS },
            })
        },
        [ActionTypes.CREATE_ERROR]: (state, { error }) => {
            return update(state, {
                status: { $set: STATUS.ERROR },
                message: { $set: renderMessage(error.status) }
            })
        },

        // UPDATE PROJECT ACTION
        [ActionTypes.UPDATE]: (state) => update(state, {
            status: { $set: STATUS.RUNNING },
        }),
        [ActionTypes.UPDATE_SUCCESS]: (state, { response }) => {
            return update(state, {
                status: { $set: STATUS.SUCCESS },
            })
        },
        [ActionTypes.UPDATE_ERROR]: (state, { error }) => {
            return update(state, {
                status: { $set: STATUS.ERROR },
                message: { $set: renderMessage(error.status) }
            })
        },

        // REMOVE PROJECT ACTION
        [ActionTypes.REMOVE]: (state) => update(state, {
            status: { $set: STATUS.RUNNING },
        }),
        [ActionTypes.REMOVE_SUCCESS]: (state, { response }) => {
            return update(state, {
                status: { $set: STATUS.SUCCESS },
            })
        },
        [ActionTypes.REMOVE_ERROR]: (state, { error }) => {
            return update(state, {
                status: { $set: STATUS.ERROR },
                message: { $set: renderMessage(error.status) }
            })
        },

        // CREATE_LINK PROJECT ACTION
        [ActionTypes.CREATE_LINK]: (state) => update(state, {
            status: { $set: STATUS.RUNNING },
        }),
        [ActionTypes.CREATE_LINK_SUCCESS]: (state, { response }) => {
            return update(state, {
                status: { $set: STATUS.SUCCESS },
            })
        },
        [ActionTypes.CREATE_LINK_ERROR]: (state, { error }) => {
            return update(state, {
                status: { $set: STATUS.ERROR },
                message: { $set: renderMessage(error.status) }
            })
        },

        // GET_LIST PROJECT ACTION
        [ActionTypes.GET_LIST]: (state) => update(state, {
            status: { $set: STATUS.RUNNING },
        }),
        [ActionTypes.GET_LIST_SUCCESS]: (state, { response }) => {
            return update(state, {
                status: { $set: STATUS.SUCCESS },
                list: { $set: response.data }
            })
        },
        [ActionTypes.GET_LIST_ERROR]: (state, { error }) => {
            return update(state, {
                status: { $set: STATUS.ERROR },
                message: { $set: renderMessage(error.status) }
            })
        },

        // GET_DETAIL PROJECT ACTION
        [ActionTypes.GET_DETAIL]: (state, { response }) => update(state, {
            status: { $set: STATUS.RUNNING },
            detail: { $set: null },
        }),
        [ActionTypes.GET_DETAIL_SUCCESS]: (state, { response }) => {
            console.log("response", response.data)
            return update(state, {
                status: { $set: STATUS.SUCCESS },
                detail: { $set: response.data },
                detailList: { $push: [response.data] }
            })
        },
        [ActionTypes.GET_DETAIL_ERROR]: (state, { error }) => {
            return update(state, {
                status: { $set: STATUS.ERROR },
                message: { $set: renderMessage(error.status) }
            })
        },


    }, initial),
};

