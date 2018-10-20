import { createActions } from 'redux-actions';

import { ActionTypes } from 'constants/index';

export const {
  create,
  update,
  remove,
  createLink,
  getList,
  getDetail
} = createActions({
  [ActionTypes.CREATE]: (data) => (data),
  [ActionTypes.UPDATE]: (data) => (data),
  [ActionTypes.REMOVE]: (data) => (data),
  [ActionTypes.CREATE_LINK]: (data) => (data),
  [ActionTypes.GET_LIST]: (data) => (data), 
  [ActionTypes.GET_DETAIL]: (data) => (data),

});
