/**
 * @module Sagas/User
 * @desc User
 */

import { notification } from 'antd';
import { all, call, put, takeLatest } from 'redux-saga/effects';

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
  },

  getProfile() {

    /**
    * Verify user via token in the url
    * @param  {string} data The token of the user
    */

    return axios(
      {
        url: endPoint + 'user',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': cookies.get('token')
        },
      }).then((response) => {
        return response.data
      })
  },

  /**
 * Update user profile, returning a promise with `true` when done
 * @param  {object} data New data
 */
  updateProfile(data) {
    // Patch a update request
    return axios(
      {
        url: endPoint + 'user',
        method: 'PATCH',
        data: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': cookies.get('token')
        },
      }).then((response) => {
        // window.location.replace("/")
        return response.data
      })
  },
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
    window.location.reload()
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
    cookies.remove('token', { path: '/' })
    window.location.replace("/")
  }
  catch (error) {
    /* istanbul ignore next */

  }
}
/**
 * Verify user
 */
export function* verify(data) {
  try {
    const response = yield call(auth.verify, data.payload);
    cookies.set('token', response.data.token)
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
 * Get user profile
 */
export function* getProfile() {
  try {
    const response = yield call(auth.getProfile);

    yield put({
      type: ActionTypes.GET_PROFILE_SUCCESS,
      response
    });
  }
  catch (error) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.GET_PROFILE_ERROR,
      error: error.response,
    });
  }
}

/**
 * Update user profile
 */
export function* updateProfile(data) {
  try {
    const response = yield call(auth.updateProfile, data.payload);

    yield put({
      type: ActionTypes.UPDATE_PROFILE_SUCCESS,
      response
    });

    notification['success']({
      message: 'Comigo',
      description: response.message,
    });
  }
  catch (error) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.UPDATE_PROFILE_ERROR,
      error: error.response,
    });
    notification['error']({
      message: 'Something went wrong!',
      description: "Fail to update profile",
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
    takeLatest(ActionTypes.GET_PROFILE, getProfile),
    takeLatest(ActionTypes.UPDATE_PROFILE, updateProfile),
  ]);
}