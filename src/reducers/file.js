import { handleActions } from 'redux-actions';
import { ActionTypes, STATUS, renderMessage } from 'constants/index';
import update from 'immutability-helper'
export const initial = {
    status: STATUS.IDLE,
    message: "",
    coverProject: {
        imageUrl: null,
        cropData: null,
    },
    profilePhoto: {
        imageUrl: null,
        cropData: null,
      
    }

}
export default {
    file: handleActions({

        // UPLOAD FILE ACTION
        [ActionTypes.UPLOAD]: (state) => update(state, {
            status: { $set: STATUS.RUNNING },
        }),

        [ActionTypes.UPLOAD_SUCCESS]: (state, { response }) => {
            return update(state, {
                status: { $set: STATUS.SUCCESS },
                coverProject: { cropData: { $set: response.data } },
            })
        },
        [ActionTypes.UPLOAD_ERROR]: (state, { error }) => {
            return update(state, {
                status: { $set: STATUS.ERROR },
                message: { $set: renderMessage(error.status) }
            })
        },
        [ActionTypes.CHANGE_PHOTO]: (state, { payload }) => {
            return update(state, {
                coverProject: { imageUrl: { $set: payload } },
                profilePhoto: { cropData: { $set: payload } },
            })
        },
        [ActionTypes.GET_CROPPED_PHOTO]: (state, { payload }) => {
            return update(state, {
                coverProject: { cropData: { $set: payload } },
            })
        }
    }, initial),
};

