import { createActions } from 'redux-actions';

import { ActionTypes } from 'constants/index';

export const {
  getPeopleList,
} = createActions({
  [ActionTypes.GET_PEOPLE_LIST]: (data) => (data),
});
