import { handleActions } from 'redux-actions';
import { ActionTypes, STATUS, renderMessage } from 'constants/index';
import update from 'immutability-helper'
export const initial = {
    status: STATUS.IDLE,
    statusUploadImage: STATUS.IDLE,
    message: "",
    loadImage: null,
    returnImage: null,
    type: null
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
                image: { $set: response.data },
                returnImage: { $set: response.data },
            })
        },
        [ActionTypes.UPLOAD_ERROR]: (state, { error }) => {
            return update(state, {
                status: { $set: STATUS.ERROR },

            })
        },

        [ActionTypes.UPLOAD_IMAGE]: (state) => update(state, {
            statusUploadImage: { $set: STATUS.RUNNING },
        }),

        [ActionTypes.UPLOAD_IMAGE_SUCCESS]: (state, { response }) => {
            console.log("response", response)
            return update(state, {
                statusUploadImage: { $set: STATUS.SUCCESS },
                mediaData: { $set: response.data },
                type: { $set: response.type },
            })
        },
        [ActionTypes.UPLOAD_IMAGE_ERROR]: (state, { error }) => {
            return update(state, {
                statusUploadImage: { $set: STATUS.ERROR },

            })
        },
        [ActionTypes.CHANGE_PHOTO]: (state, { payload }) => {
            return update(state, {
                loadImage: { $set: payload },
            })
        },
        [ActionTypes.GET_CROPPED_PHOTO]: (state, { payload }) => {
            return update(state, {

            })
        },
        [ActionTypes.GET_IMAGE_PAYLOAD]: (state, { payload }) => {
            return update(state, {
                image: { $set: payload },
            })
        }
    }, initial),
};

