/**
 * @module Sagas/File
 * @desc File
 */

import { all, call, put, takeLatest } from 'redux-saga/effects';
import { notification } from 'antd';
import { ActionTypes } from 'constants/index';
import { Cookies } from 'react-cookie'
import { endPoint } from 'constants/index'
import axios from 'axios'
const cookies = new Cookies()

const searchHandler = {
  /**
  * Upload file to s3 amazon, returning a file url when done
  * @param  {object} data The file data
  */
  search(data) {

    // Post a upload request
    return axios(
      {
        url: endPoint + `newsfeed?pageSize=100${data.data && "&keyword=" + data.data}`,
        method: 'GET',

        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': cookies.get('token'),
        },
      }).then((response) => {
        return response.data
      })
  },


  /**
* Upload file to s3 amazon, returning a file url when done
* @param  {object} data The file data
*/
  searchSkill(data) {

    // Post a upload request
    return axios(
      {
        url: endPoint + 'skill/listTagRelated?keyword=' + data,
        method: 'GET',

        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        return response.data
      })
  },
}
/**
 * Upload
 */
export function* search(data) {
  try {
    const response = yield call(searchHandler.search, data.payload);

    yield put({
      type: ActionTypes.SEARCH_SUCCESS,
      response: { data:response.data, type: data.payload.type }
    });

  }
  catch (error) {

    yield put({
      type: ActionTypes.SEARCH_ERROR,
      error: error,
    });
  }
}

/**
 * Upload
 */
export function* searchSkill(data) {
  try {
    const response = yield call(searchHandler.searchSkill, data.payload);

    yield put({
      type: ActionTypes.SEARCH_SKILL_SUCCESS,
      response: response
    });

  }
  catch (error) {

    yield put({
      type: ActionTypes.SEARCH_SKILL_ERROR,
      error: error,
    });
  }
}
/**
 * File Sagas
 */
export default function* root() {
  yield all([
    takeLatest(ActionTypes.SEARCH, search),
    takeLatest(ActionTypes.SEARCH_SKILL, searchSkill),
  ]);
}
