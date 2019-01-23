import { createActions } from 'redux-actions';

import { ActionTypes } from 'constants/index';

export const {
  login,
  logout,
  signup,
  nextStep,
  loginSuccess,
  loginError,
  getProfile,
  verify,
  updateProfile,
  resend,
  getBadgeList,
  giveBadge
} = createActions({
  [ActionTypes.LOGIN]: (data) => (data),
  [ActionTypes.LOGOUT]: () => ({}),
  [ActionTypes.SIGNUP]: (data) => (data),
  [ActionTypes.NEXT_STEP]: () => ({}),
  [ActionTypes.LOGIN_SUCCESS]: () => ({}),
  [ActionTypes.LOGIN_ERROR]: () => ({}),
  [ActionTypes.GET_PROFILE]: () => ({}),
  [ActionTypes.VERIFY]: (data) => (data),
  [ActionTypes.UPDATE_PROFILE]: (data) => (data),
  [ActionTypes.RESEND]: () => ({}),
  [ActionTypes.GET_BADGE_LIST]: () => ({}),
  [ActionTypes.GIVE_BADGE]: (data) => (data),
});
