/**
 * @module Sagas/User
 * @desc User
 */

import { all, call, put, takeLatest } from 'redux-saga/effects';

import { ActionTypes } from 'constants/index';
import { Cookies } from 'react-cookie'
import { endPoint } from 'constants/index'
import axios from 'axios'
const cookies = new Cookies()
var https = require("https");
const people = {
  /**
    * Get list of people registerd, returning a people list when done
    */
  getPeopleList(keyword) {
    // Post a sign in request
    return axios(
      {
        url: endPoint + 'people?keyword=' + keyword,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }).then((response) => {
        // window.location.replace("/")
        return response.data
      })
  },
  /**
    * Get detail of specific person, returning a user data
    */
  getPeopleDetail(id) {
    // Post a sign in request
    return axios(
      {
        url: endPoint + 'people/' + id,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }).then((response) => {
        // window.location.replace("/")
        return response.data
      })
  },

  /**
  * Using mail chimp API to gather subcription
  * @param  {string} email email of subcriber
  */
  subcribe(email) {

    return axios(
      {
        url: 'https://us17.api.mailchimp.com/3.0/lists/1d8b810a50/members/',
        method: 'POST',
        data: JSON.stringify({
          "email_address": email,
        }),
        httpsAgent: new https.Agent({ rejectUnauthorized: false }),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'apikey 234460a8604e8d96ac1cd9c9bb53e730-us17'
        },

      }).then((response) => {
        return response.data
      })
  },
}


/**
 * get people list
 */
export function* getPeopleList(data) {
  try {
    const response = yield call(people.getPeopleList, data.payload);

    yield put({
      type: ActionTypes.GET_PEOPLE_LIST_SUCCESS,
      response
    });
  }
  catch (error) {
    yield put({
      type: ActionTypes.GET_PEOPLE_LIST_ERROR,
      error: error.response,
    });
  }
}


/**
 * get people detail
 */
export function* getPeopleDetail(data) {
  try {
    const response = yield call(people.getPeopleDetail, data.payload);

    yield put({
      type: ActionTypes.GET_PEOPLE_DETAIL_SUCCESS,
      response
    });
  }
  catch (error) {
    yield put({
      type: ActionTypes.GET_PEOPLE_DETAIL_ERROR,
      error: error.response,
    });
  }
}



/**
 * User subcribe 
 */
export function* subcribe(payload) {

  try {
    const response = yield call(people.subcribe, payload);

    yield put({
      type: ActionTypes.SUBCRIBE_SUCCESS,
      response
    });
  }
  catch (error) {
    yield put({
      type: ActionTypes.SUBCRIBE_ERROR,
      error: error.response,
    });
  }
}

/**
 * People Sagas
 */
export default function* root() {
  yield all([
    takeLatest(ActionTypes.GET_PEOPLE_LIST, getPeopleList),
    takeLatest(ActionTypes.GET_PEOPLE_DETAIL, getPeopleDetail),
    takeLatest(ActionTypes.SUBCRIBE, subcribe),
  ]);
}
