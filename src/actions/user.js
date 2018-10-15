import { createActions } from 'redux-actions';

import { ActionTypes } from 'constants/index';

export const {
  login,
  logOut,
  signup,
  nextStep,
  loginSuccess,
  getProfile,
  verify,
  updateProfile 
} = createActions({
  [ActionTypes.LOGIN]: (data) => (data),
  [ActionTypes.LOGOUT]: () => ({}),
  [ActionTypes.SIGNUP]: (data) => (data),
  [ActionTypes.NEXT_STEP]: () => ({}),
  [ActionTypes.LOGIN_SUCCESS]: () => ({}),
  [ActionTypes.GET_PROFILE]: () => ({}),
  [ActionTypes.VERIFY]: () => ({}),
  [ActionTypes.UPDATE_PROFILE]: (data) => (data),
});
