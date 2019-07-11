import { createActions } from 'redux-actions';

import { ActionTypes } from 'constants/index';

export const {
  getPeopleList,
  getPeopleDetail,
  subcribe,
  getPeopleMayKnow
} = createActions({
  [ActionTypes.GET_PEOPLE_LIST]: (data) => (data),
  [ActionTypes.GET_PEOPLE_MAY_KNOW]: (data) => (data),
  [ActionTypes.GET_PEOPLE_DETAIL]: (data) => (data),
  [ActionTypes.SUBCRIBE]: (data) => (data),
});
