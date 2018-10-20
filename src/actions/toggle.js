import { createActions } from 'redux-actions';

import { ActionTypes } from 'constants/index';

export const {
  toggleHomeView,
} = createActions({
  [ActionTypes.TOGGLE_HOME_VIEW]: () => ({}),
});
