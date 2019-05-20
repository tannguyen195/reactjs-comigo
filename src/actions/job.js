import { createActions } from 'redux-actions';

import { ActionTypes } from 'constants/index';

export const {
  postJob,
  getJobDetail,
  deleteJob,
  updateJob,
  listJob
} = createActions({
  [ActionTypes.POST_JOB]: (data) => (data),
  [ActionTypes.GET_JOB_DETAIL]: (data) => (data),
  [ActionTypes.DELETE_JOB]: (data) => (data),
  [ActionTypes.UPDATE_JOB]: (data) => (data),
  [ActionTypes.LIST_JOB]: (data) => (data),
  
});
