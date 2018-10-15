/**
 * @module Sagas/User
 * @desc User
 */

import { delay } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { ActionTypes } from 'constants/index';
import { Cookies } from 'react-cookie'
import { endPoint } from 'constants/index'
import axios from 'axios' 
const cookies = new Cookies()
const project = {
  /**
  * Create a new projectt, returning a project data when done
  * @param  {Object} data The new data of the project
  */
  create(data) {
    // Post a sign in request
    return axios(
      {
        url: endPoint + 'project',
        method: 'POST',
        data: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': cookies.get('token')
        },

      }).then((response) => {
        cookies.set('token', response.data.token, { path: '/' })
        // window.location.replace("/")
        return response.data
      })
  },
  /**
  * Update an existing projectt, returning a project data when done
  * @param  {Object} data The new data of the project
  */
  update(data) {
    // Post a sign in request
    return axios(
      {
        url: endPoint + 'project',
        method: 'PATCH',
        data: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': cookies.get('token')
        },

      }).then((response) => {
        cookies.set('token', response.data.token, { path: '/' })
        // window.location.replace("/")
        return response.data
      })
  },
  /**
    * Remove a project, returning a {true} when done
    * @param  {Object} data The data of the project which will be deleted
    */
  remove(data) {
    // Post a sign in request
    return axios(
      {
        url: endPoint + 'project',
        method: 'DELETE',
        data: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': cookies.get('token')
        },
      }).then((response) => {
        cookies.set('token', response.data.token, { path: '/' })
        // window.location.replace("/")
        return response.data
      })
  },
  /**
    * Create a sharing link, returning a new link when done
    * @param  {Object} data The new data of the project of sharing link
    */
  createLink(data) {
    // Post a sign in request
    return axios(
      {
        url: endPoint + 'project/shareCode',
        method: 'POST',
        data: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': cookies.get('token')
        },
      }).then((response) => {
        cookies.set('token', response.data.token, { path: '/' })
        // window.location.replace("/")
        return response.data
      })
  },
  /**
    * Get list of project, returning a project list when done
    * @param  {string} keyword The keyword which included project name, people,.. to search
    */
  getList(keyword) {
    // Post a sign in request
    return axios(
      {
        url: endPoint + 'project?keyword=' + keyword,
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
    * Get project detail of project, returning a project data when done
    * @param  {string} id The id of project which returned when done
    */
  getList(id) {
    // Post a sign in request
    return axios(
      {
        url: endPoint + 'project/' + id,
        method: 'GET',
        data: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      }).then((response) => {
        cookies.set('token', response.data.token, { path: '/' })
        // window.location.replace("/")
        return response.data
      })
  },
}
/**
 * create a new project
 */
export function* create(data) {
  try {
    const response = yield call(project.create, data.payload);
    yield put({
      type: ActionTypes.CREATE_SUCCESS,
      response
    });
  }
  catch (error) {


    yield put({
      type: ActionTypes.CREATE_ERROR,
      error: error.response,
    });
  }
}


/**
 * update a project
 */
export function* update(data) {
  try {
    const response = yield call(project.update, data.payload);

    yield put({
      type: ActionTypes.UPDATE_SUCCESS,
      response
    });
  }
  catch (error) {


    yield put({
      type: ActionTypes.UPDATE_ERROR,
      error: error.response,
    });
  }
}


/**
 * remove a project
 */
export function* remove(data) {
  try {
    const response = yield call(project.remove, data.payload);


    yield put({
      type: ActionTypes.REMOVE_SUCCESS,
      response
    });
  }
  catch (error) {


    yield put({
      type: ActionTypes.REMOVE_ERROR,
      error: error.response,
    });
  }
}


/**
 * create share link
 */
export function* createLink(data) {
  try {
    const response = yield call(project.createLink, data.payload);

    yield put({
      type: ActionTypes.CREATE_LINK_SUCCESS,
      response
    });
  }
  catch (error) {


    yield put({
      type: ActionTypes.CREATE_LINK_ERROR,
      error: error.response,
    });
  }
}


/**
 * get project list
 */
export function* getList(data) {
  try {
    const response = yield call(project.getList, data.payload);

    yield put({
      type: ActionTypes.GET_LIST_SUCCESS,
      response
    });
  }
  catch (error) {


    yield put({
      type: ActionTypes.GET_LIST_ERROR,
      error: error.response,
    });
  }
}


/**
 * get project detail
 */
export function* getDetail(data) {
  try {
    const response = yield call(project.getDetail, data.payload);
    yield put({
      type: ActionTypes.GET_DETAIL_SUCCESS,
      response
    });
  }
  catch (error) {


    yield put({
      type: ActionTypes.GET_DETAIL_ERROR,
      error: error.response,
    });
  }
}

/**
 * Project Sagas
 */
export default function* root() {
  yield all([
    takeLatest(ActionTypes.CREATE, create),
    takeLatest(ActionTypes.UPDATE, update),
    takeLatest(ActionTypes.REMOVE, remove),
    takeLatest(ActionTypes.CREATE_LINK, createLink),
    takeLatest(ActionTypes.GET_LIST, getList),
    takeLatest(ActionTypes.GET_DETAIL, getDetail),
  ]);
}
