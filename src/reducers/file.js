import { handleActions } from 'redux-actions';
import { ActionTypes, STATUS, renderMessage } from 'constants/index';
import update from 'immutability-helper'
export const initial = {
    status: STATUS.IDLE,
    message: "",
    loadImage: null,
    returnImage: null,
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

