import { handleActions } from 'redux-actions';
import { ActionTypes, STATUS, renderMessage } from 'constants/index';
import update from 'immutability-helper'
export const initial = {
    status: STATUS.IDLE,
    message: "",
    people: [],
    peopleDetail: null
}

export default {
    people: handleActions({


        // GET_LIST PEOPLE ACTION
        [ActionTypes.GET_LIST]: (state) => update(state, {
            status: { $set: STATUS.RUNNING },
        }),
        [ActionTypes.GET_PEOPLE_LIST_SUCCESS]: (state, { response }) => {
            return update(state, {
                status: { $set: STATUS.SUCCESS },
                people: { $set: response.data }
            })
        },
        [ActionTypes.GET_PEOPLE_LIST_ERROR]: (state, { error }) => {
            return update(state, {
                status: { $set: STATUS.ERROR },
                message: { $set: renderMessage(error.status) }
            })
        },

        // GET DETAIL PEOPLE ACTION
        [ActionTypes.GET_PEOPLE_DETAIL]: (state) => update(state, {
            status: { $set: STATUS.RUNNING },
        }),
        [ActionTypes.GET_PEOPLE_DETAIL_SUCCESS]: (state, { response }) => {
            return update(state, {
                status: { $set: STATUS.SUCCESS },
                peopleDetail: { $set: response.data }
            })
        },
        [ActionTypes.GET_PEOPLE_DETAIL_ERROR]: (state, { error }) => {
            return update(state, {
                status: { $set: STATUS.ERROR },
                message: { $set: renderMessage(error.status) }
            })
        },

    }, initial),
};

