import { handleActions } from 'redux-actions';
import { ActionTypes, STATUS, renderMessage } from 'constants/index';
import update from 'immutability-helper'
import { merge } from 'popmotion';
export const initial = {
    status: STATUS.IDLE,
    message: "",
    list: [],
    detail: null,
    detailList: [],
    requestData: null
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
            return update(state, {
                status: { $set: STATUS.SUCCESS },
                detail: {
                    $set: response.data
                },

                detailList: { $push: [response.data] }
            })
        },
        [ActionTypes.GET_DETAIL_ERROR]: (state, { error }) => {
            return update(state, {
                status: { $set: STATUS.ERROR },
                message: { $set: renderMessage(error.status) }
            })
        },

        // POST UPDATE PROJECT ACTION
        [ActionTypes.POST_PROJECT_UPDATE]: (state, { response }) => update(state, {
            status: { $set: STATUS.RUNNING },
        }),
        [ActionTypes.POST_PROJECT_UPDATE_SUCCESS]: (state, { response }) => {
            return update(state, {
                status: { $set: STATUS.SUCCESS },
                detail: { updates: { $unshift: [response.data] } }
            })
        },
        [ActionTypes.POST_PROJECT_UPDATE_ERROR]: (state, { error }) => {
            return update(state, {
                status: { $set: STATUS.ERROR },
                message: { $set: renderMessage(error.status) }
            })
        },
        // EDIT UPDATE PROJECT ACTION
        [ActionTypes.EDIT_PROJECT_UPDATE]: (state, { response }) => update(state, {
            status: { $set: STATUS.RUNNING },
        }),
        [ActionTypes.EDIT_PROJECT_UPDATE_SUCCESS]: (state, { response }) => {
            return update(state, {
                status: { $set: STATUS.SUCCESS },
                detail: { updates: { [state.detail.updates.findIndex((e) => e._id === response.data._id)]: { $set: response.data } } }
            })
        },
        [ActionTypes.EDIT_PROJECT_UPDATE_ERROR]: (state, { error }) => {
            return update(state, {
                status: { $set: STATUS.ERROR },
                message: { $set: renderMessage(error.status) }
            })
        },

        // REMOVE UPDATE PROJECT ACTION
        [ActionTypes.REMOVE_PROJECT_UPDATE]: (state, { response }) => update(state, {
            status: { $set: STATUS.RUNNING },
        }),
        [ActionTypes.REMOVE_PROJECT_UPDATE_SUCCESS]: (state, { response }) => {

            return update(state, {
                status: { $set: STATUS.SUCCESS },
                detail: { updates: { $set: response.data.updates } }
            })
        },
        [ActionTypes.REMOVE_PROJECT_UPDATE_ERROR]: (state, { error }) => {
            return update(state, {
                status: { $set: STATUS.ERROR },
                message: { $set: renderMessage(error.status) }
            })
        },

        // CREATE_SHARE_LINK ACTION
        [ActionTypes.CREATE_SHARE_LINK]: (state, { response }) => update(state, {
            status: { $set: STATUS.RUNNING },
        }),
        [ActionTypes.CREATE_SHARE_LINK_SUCCESS]: (state, { response }) => {
            return update(state, {
                status: { $set: STATUS.SUCCESS },
                requestData: { $set: response.data },
            })
        },
        [ActionTypes.CREATE_SHARE_LINK_ERROR]: (state, { error }) => {
            return update(state, {
                status: { $set: STATUS.ERROR },
                message: { $set: renderMessage(error.status) }
            })
        },

        [ActionTypes.UPLOAD_IMAGE_SUCCESS]: (state, { response }) => {
            
            if (response.payload.index !== 3) return update(state, {
                detail: { media: { [response.payload.index]: { $set: response.data } } }
            })
            else {
                return update(state, {
                    detail: { media: { $push: [response.data] } }
                })
            }
        },


        // REMOVE SHARED COLLABORATOR ACTION
        [ActionTypes.REMOVE_SHARED_USER]: (state) => update(state, {
            status: { $set: STATUS.RUNNING },
        }),
        [ActionTypes.REMOVE_SHARED_USER_SUCCESS]: (state, { response }) => {
            return update(state, {
                status: { $set: STATUS.SUCCESS },
                detail: { shares: { $set: response.data } }
            })
        },
        [ActionTypes.CREMOVE_SHARED_USER_ERROR]: (state, { error }) => {
            return update(state, {
                status: { $set: STATUS.ERROR },
                message: { $set: renderMessage(error.status) }
            })
        },


    }, initial),
};

