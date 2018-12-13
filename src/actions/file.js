import { createActions } from 'redux-actions';

import { ActionTypes } from 'constants/index';

export const {
  upload,
  uploadImage,
  changePhoto,
} = createActions({
  [ActionTypes.UPLOAD]: (data) => (data),
  [ActionTypes.UPLOAD_IMAGE]: (data) => (data),
  [ActionTypes.CHANGE_PHOTO]: (data) => (data),
});
