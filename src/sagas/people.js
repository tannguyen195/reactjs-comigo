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
const project = {
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
}


/**
 * get people list
 */
export function* getPeopleList(data) {
  try {
    const response = yield call(project.getPeopleList, data.payload);

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
    const response = yield call(project.getPeopleDetail, data.payload);

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
 * People Sagas
 */
export default function* root() {
  yield all([
    takeLatest(ActionTypes.GET_PEOPLE_LIST, getPeopleList),
    takeLatest(ActionTypes.GET_PEOPLE_DETAIL, getPeopleDetail),
  ]);
}
