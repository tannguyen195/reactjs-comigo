/**
 * @module Sagas/User
 * @desc User
 */

import { all, call, put, takeLatest } from 'redux-saga/effects';
import { notification } from 'antd';
import { ActionTypes } from 'constants/index';
import { Cookies } from 'react-cookie'
import { endPoint } from 'constants/endPoint'
import { Router } from 'routes'
import axios from 'axios'
const cookies = new Cookies()
const job = {

  postJob(data) {
    // Post a sign in request
    return axios(
      {
        url: endPoint + 'job',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': cookies.get('token')
        },
        data: JSON.stringify(data),
      }).then((response) => {
        // window.location.replace("/")
        return response.data
      })
  },


  getJobDetail(data) {
    // Post a sign in request
    return axios(
      {
        url: endPoint + 'job',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': cookies.get('token')
        },
        data: JSON.stringify(data),
      }).then((response) => {
        // window.location.replace("/")
        return response.data
      })
  },


  deleteJob(data) {
    // Post a sign in request
    return axios(
      {
        url: endPoint + 'job/' + data.jobID,
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': cookies.get('token')
        },

      }).then((response) => {
        // window.location.replace("/")
        return response.data
      })
  },


  updateJob(data) {
    // Post a sign in request
    return axios(
      {
        url: endPoint + 'job/' + data.jobID,
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': cookies.get('token')
        },
        data: JSON.stringify(data),
      }).then((response) => {
        // window.location.replace("/")
        return response.data
      })
  },


  listJob(id) {

    // Post a sign in request
    return axios(
      {
        url: endPoint + 'job/list' + `${id ? `${'?projectID=' + id}` : ""}`,
        method: 'GET',
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

export function* postJob(data) {
  try {
    const response = yield call(job.postJob, data.payload);

    yield put({
      type: ActionTypes.POST_JOB_SUCCESS,
      response: response.data
    });

    yield put({
      type: ActionTypes.TOGGLE_POST_JOB,

    });
    notification['success']({
      message: 'Comigo',
      description: response.message,
    });
  }
  catch (error) {
    yield put({
      type: ActionTypes.POST_JOB_ERROR,
      error: error.response,
    });

    notification['error']({
      message: 'Something went wrong!',
      description: "Fail to post new job!",
    });
  }
}

export function* getJobDetail(data) {
  try {
    const response = yield call(job.getJobDetail, data.payload);

    yield put({
      type: ActionTypes.GET_JOB_DETAIL_SUCCESS,
      response: response.data
    });
  }
  catch (error) {
    yield put({
      type: ActionTypes.GET_JOB_DETAIL_ERROR,
      error: error.response,
    });
  }
}

export function* deleteJob(data) {
  try {
    const response = yield call(job.deleteJob, data.payload);

    yield put({
      type: ActionTypes.DELETE_JOB_SUCCESS,
      response: response.data
    });


    notification['success']({
      message: 'Comigo',
      description: response.message,
    });
  }
  catch (error) {
    yield put({
      type: ActionTypes.DELETE_JOB_ERROR,
      error: error.response,
    });

    notification['error']({
      message: 'Something went wrong!',
      description: "Fail to delete job!",
    });
  }
}

export function* updateJob(data) {
  try {
    const response = yield call(job.updateJob, data.payload);

    yield put({
      type: ActionTypes.UPDATE_JOB_SUCCESS,
      response: response.data
    });

    notification['success']({
      message: 'Comigo',
      description: response.message,
    });
  }
  catch (error) {
    yield put({
      type: ActionTypes.UPDATE_JOB_ERROR,
      error: error.response,
    });

    notification['error']({
      message: 'Something went wrong!',
      description: "Fail to update job!",
    });
  }
}

export function* listJob(data) {
  try {
    const response = yield call(job.listJob, data.payload.id);

    yield put({
      type: ActionTypes.LIST_JOB_SUCCESS,
      response: { data: response.data, type: data.payload.type }
    });
  }
  catch (error) {

    yield put({
      type: ActionTypes.LIST_JOB_ERROR,
      error: error.response,
    });
  }
}
/**
 * Project Sagas
 */
export default function* root() {
  yield all([

    takeLatest(ActionTypes.POST_JOB, postJob),
    takeLatest(ActionTypes.GET_JOB_DETAIL, getJobDetail),
    takeLatest(ActionTypes.DELETE_JOB, deleteJob),
    takeLatest(ActionTypes.UPDATE_JOB, updateJob),
    takeLatest(ActionTypes.LIST_JOB, listJob),
  ]);
}
