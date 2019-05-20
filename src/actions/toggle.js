import { createActions } from 'redux-actions';

import { ActionTypes } from 'constants/index';

export const {
  toggleHomeView,
  togglePreviewImage,
  toggleRequestCollaborator,
  toggleRemoveCollaborator,
  toggleEditUpdate,
  toggleEditComment,
  togglePostJob,
  toggleForgotModal
} = createActions({
  [ActionTypes.TOGGLE_HOME_VIEW]: (data) => (data),
  [ActionTypes.TOGGLE_PREVIEW_IMAGE]: (data) => (data),
  [ActionTypes.TOGGLE_REQUEST_COLLABORATOR]: () => ({}),
  [ActionTypes.TOGGLE_REMOVE_COLLABORATOR]: (data) => (data),
  [ActionTypes.TOGGLE_EDIT_UPDATE]: (data) => (data),
  [ActionTypes.TOGGLE_EDIT_COMMENT]: (data) => (data),
  [ActionTypes.TOGGLE_POST_JOB]: (data) => (data),
  [ActionTypes.TOGGLE_FORGOT_MODAL]: (data) => (data),
});
