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
  updateProfile 
} = createActions({
  [ActionTypes.LOGIN]: (data) => (data),
  [ActionTypes.LOGOUT]: () => ({}),
  [ActionTypes.SIGNUP]: (data) => (data),
  [ActionTypes.NEXT_STEP]: () => ({}),
  [ActionTypes.LOGIN_SUCCESS]: () => ({}),
  [ActionTypes.LOGIN_ERROR]: () => ({}),
  [ActionTypes.GET_PROFILE]: () => ({}),
  [ActionTypes.VERIFY]: () => ({}),
  [ActionTypes.UPDATE_PROFILE]: (data) => (data),
});
