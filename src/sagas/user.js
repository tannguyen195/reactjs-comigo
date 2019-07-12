/**
 * @module Sagas/User
 * @desc User
 */

import { notification } from 'antd';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { ActionTypes } from 'constants/index';
import { Cookies } from 'react-cookie'
import { endPoint } from 'constants/endPoint'
import * as peopleAction from '../actions/people'
import axios from 'axios'

const cookies = new Cookies()
export const auth = {
  /**
  * Logs a user in, returning a promise with `true` when done
  * @param  {string} email The username of the user
  * @param  {string} password The password of the user
  */
  login(data) {
   
    // Post a sign in request
    return axios(
      {
        url: endPoint + 'user/signIn',
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
        url: endPoint + 'user/signUp',
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

  /**
 * Resend email verification to user email
 * @param  none
 */
  resend() {
    return axios(
      {
        url: endPoint + 'user/resendVerification',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': cookies.get('token')
        },
      }).then((response) => {
        // window.location.replace("/")
        return response.data
      })
  },

  getBadgeList() {
    return axios(
      {
        url: endPoint + 'badge/list',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': cookies.get('token')
        },
      }).then((response) => {
        return response.data
      })
  },

  giveBadge(data) {

    return axios(
      {
        url: endPoint + 'badge/giveNod?userID=' + data.userID + "&badgeID=" + data.badgeID,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': cookies.get('token')
        },

      }).then((response) => {
        return response.data
      })
  },

  sendPasswordReset(data) {

    return axios(
      {
        url: endPoint + 'user/sendPasswordReset',
        method: 'POST',
        data: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },

      }).then((response) => {
        return response.data
      })
  },

  resetPassword(data) {

    return axios(
      {
        url: endPoint + 'user/resetPassword',
        method: 'POST',
        data: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },

      }).then((response) => {
        return response.data
      })
  },

  changePassword(data) {

    return axios(
      {
        url: endPoint + 'user/changePassword',
        method: 'POST',
        data: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': cookies.get('token')
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
    window.location.reload()
  }
  catch (error) {

    /* istanbul ignore next */
    yield put({
      type: ActionTypes.SIGNUP_ERROR,
      error: error.response,
    });
    notification['error']({
      message: 'Fail to sign up!',
      description: error.response.data.error,
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
 * re-send email vẻification 
 */
export function* resend() {

  try {
    const response = yield call(auth.resend);
    yield put({
      type: ActionTypes.RESEND_SUCCESS,
      response
    });
  }
  catch (error) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.RESEND_ERROR,
      error: error.response,
    });
  }
}

/**
 * get badge list
 */
export function* getBadgeList() {

  try {
    const response = yield call(auth.getBadgeList);
    yield put({
      type: ActionTypes.GET_BADGE_LIST_SUCCESS,
      response
    });
  }
  catch (error) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.GET_BADGE_LIST_ERROR,
      error: error.response,
    });
  }
}

/**
 * give badge 
 */
export function* giveBadge(data) {

  try {
    const response = yield call(auth.giveBadge, data.payload);
    yield put({
      type: ActionTypes.GIVE_BADGE_SUCCESS,
      response
    });
  }
  catch (error) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.GIVE_BADGE_ERROR,
      error: error.response,
    });
  }
}


export function* sendPasswordReset(data) {

  try {
    const response = yield call(auth.sendPasswordReset, data.payload);
    yield put({
      type: ActionTypes.SEND_PASSWORD_RESET_SUCCESS,
      response
    });
  }
  catch (error) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.SEND_PASSWORD_RESET_ERROR,
      error: error.response,
    });
  }
}


export function* resetPassword(data) {

  try {
    const response = yield call(auth.resetPassword, data.payload);
    yield put({
      type: ActionTypes.RESET_PASSWORD_SUCCESS,
      response
    });
    notification['success']({
      message: 'Comigo',
      description: response.message,
    });
    window.location.replace("/login")
  }
  catch (error) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.RESET_PASSWORD_ERROR,
      error: error.response,
    });
  }
}


export function* changePassword(data) {

  try {
    const response = yield call(auth.changePassword, data.payload);
    yield put({
      type: ActionTypes.CHANGE_PASSWORD_SUCCESS,
      response
    });
  }
  catch (error) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.CHANGE_PASSWORD_ERROR,
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
    takeLatest(ActionTypes.GET_PROFILE, getProfile),
    takeLatest(ActionTypes.UPDATE_PROFILE, updateProfile),
    takeLatest(ActionTypes.RESEND, resend),
    takeLatest(ActionTypes.GET_BADGE_LIST, getBadgeList),
    takeLatest(ActionTypes.GIVE_BADGE, giveBadge),

    takeLatest(ActionTypes.SEND_PASSWORD_RESET, sendPasswordReset),
    takeLatest(ActionTypes.RESET_PASSWORD, resetPassword),
    takeLatest(ActionTypes.CHANGE_PASSWORD, changePassword)
  ]);
}
