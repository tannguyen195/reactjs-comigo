import { createActions } from 'redux-actions';

import { ActionTypes } from 'constants/index';

export const {
  search,
  searchSkill,
} = createActions({
  [ActionTypes.SEARCH]: (data) => (data),
  [ActionTypes.SEARCH_SKILL]: (data) => (data),
});
