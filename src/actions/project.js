import { createActions } from 'redux-actions';

import { ActionTypes } from 'constants/index';

export const {
  create,
  update,
  remove,
  createLink,
  getList,
  getDetail,

  postProjectUpdate,
  editProjectUpdate,
  removeProjectUpdate,
  getComment,
  postComment,
  postCommentDetail,
  editComment,
  removeComment,

  createShareLink,
  acceptShareLink,
  removeSharedUser,
  editUserRole,

  getMajorList,
  setStep,
  updateCreateProject
} = createActions({
  [ActionTypes.CREATE]: (data) => (data),
  [ActionTypes.UPDATE]: (data) => (data),
  [ActionTypes.REMOVE]: (data) => (data),
  [ActionTypes.CREATE_LINK]: (data) => (data),
  [ActionTypes.GET_LIST]: (data) => (data),
  [ActionTypes.GET_DETAIL]: (data) => (data),

  [ActionTypes.POST_PROJECT_UPDATE]: (data) => (data),
  [ActionTypes.EDIT_PROJECT_UPDATE]: (data) => (data),
  [ActionTypes.REMOVE_PROJECT_UPDATE]: (data) => (data),
  [ActionTypes.GET_COMMENT]: (data) => (data),
  [ActionTypes.POST_COMMENT]: (data) => (data),
  [ActionTypes.POST_COMMENT_DETAIL]: (data) => (data),

  [ActionTypes.EDIT_COMMENT]: (data) => (data),
  [ActionTypes.REMOVE_COMMENT]: (data) => (data),

  [ActionTypes.CREATE_SHARE_LINK]: (data) => (data),
  [ActionTypes.ACCEPT_SHARE_LINK]: (data) => (data),
  [ActionTypes.REMOVE_SHARED_USER]: (data) => (data),
  [ActionTypes.EDIT_USER_ROLE]: (data) => (data),
  [ActionTypes.GET_MAJOR_LIST]: (data) => (data),
  [ActionTypes.SET_STEP]: (data) => (data),
  [ActionTypes.UPDATE_CREATE_PROJECT]: (data) => (data),
});
