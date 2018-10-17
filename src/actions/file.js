import { createActions } from 'redux-actions';

import { ActionTypes } from 'constants/index';

export const {
  upload,
  changePhoto,
  getCroppedPhoto
} = createActions({
  [ActionTypes.UPLOAD]: (data) => (data),
  [ActionTypes.CHANGE_PHOTO]: (data) => (data),
  [ActionTypes.GET_CROPPED_PHOTO]: (data) => (data),
});
