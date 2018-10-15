/**
 * @module Sagas/User
 * @desc User
 */

import { delay } from 'redux-saga';
import { all, call, put, takeLatest, takeEvery } from 'redux-saga/effects';

import { ActionTypes } from 'constants/index';
import { Cookies } from 'react-cookie'
import { endPoint } from 'constants/index'
import axios from 'axios'
const cookies = new Cookies()
const auth = {
  /**
  * Logs a user in, returning a promise with `true` when done
  * @param  {string} email The username of the user
  * @param  {string} password The password of the user
  */
  login(data) {
    // Post a sign in request
    return axios(
      {
        url: endPoint + 'signIn',
        method: 'POST',
        data: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      }).then((response) => {
        cookies.set('token', response.data.token, { path: '/' })
        // window.location.replace("/")
        return response.data
      })
  },
  /**
  * Logs the current user out
  */
  logout() {
    return request.post('/logout')
  },

  /**
  * Registers a user and then logs them in
  * @param  {string} username The username of the user
  * @param  {string} password The password of the user
  */
  signup(data) {

    // Post a fake request
    return axios(
      {
        url: endPoint + 'signUp',
        method: 'POST',
        data: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      }).then((response) => {
        return response.data
      })
  },
  verify(data) {

    /**
    * Verify user via token in the url
    * @param  {string} data The token of the user
    */

    return axios(
      {
        url: endPoint + 'user/verify',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': data
        },
      }).then((response) => {
        return response.data
      })
  }
}
/**
 * Signup
 */
export function* signup(data) {
  try {
    const response = yield call(auth.signup, data.payload);

    cookies.set('token', response.token, { path: '/' })
    yield put({
      type: ActionTypes.SIGNUP_SUCCESS,
      response
    });
    yield put({
      type: ActionTypes.LOGIN_SUCCESS,
    });
    yield put({
      type: ActionTypes.NEXT_STEP,
    });
  }
  catch (error) {

    /* istanbul ignore next */
    yield put({
      type: ActionTypes.SIGNUP_ERROR,
      error: error.response,
    });
  }
}

/**
 * Login
 */
export function* login(data) {
  try {
    const response = yield call(auth.login, data.payload);

    yield put({
      type: ActionTypes.LOGIN_SUCCESS,
      response
    });
    window.location.replace("/")
  }
  catch (error) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.LOGIN_ERROR,
      error: error.response,
    });
  }
}

/**
 * Logout
 */
export function* logout() {
  try {
    yield call(delay, 200);

    yield put({
      type: ActionTypes.LOGOUT_SUCCESS,
    });
  }
  catch (error) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.LOGOUT_ERROR,
      payload: error,
    });
  }
}
/**
 * Verify user
 */
export function* verify(data) {
  try {
    const response = yield call(auth.verify, data.payload);

    yield put({
      type: ActionTypes.VERIFY_SUCCESS,
    });
  }
  catch (error) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.VERIFY_ERROR,
      error: error.response,
    });
  }
}
/**
 * User Sagas
 */
export default function* root() {
  yield all([
    takeLatest(ActionTypes.LOGIN, login),
    takeLatest(ActionTypes.LOGOUT, logout),
    takeLatest(ActionTypes.SIGNUP, signup),
    takeLatest(ActionTypes.VERIFY, verify),
  ]);
}
