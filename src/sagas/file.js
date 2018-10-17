/**
 * @module Sagas/File
 * @desc File
 */

import { all, call, put, takeLatest } from 'redux-saga/effects';

import { ActionTypes } from 'constants/index';
import { Cookies } from 'react-cookie'
import { endPoint } from 'constants/index'
import axios from 'axios'
const cookies = new Cookies()
const file = {
  /**
  * Upload file to s3 amazon, returning a file url when done
  * @param  {object} data The file data
  */
  upload(data) {
    // helper function: generate a new file from base64 String
    const dataURLtoFile = (dataurl, filename) => {
      var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
    }
    const file = dataURLtoFile(data, "cover")
    // put file into form data
    const sendData = new FormData()
    sendData.append('file', file)

    // Post a upload request
    return axios(
      {
        url: endPoint + 'file/upload',
        method: 'POST',
        data: sendData,
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-auth-token': cookies.get('token'),
          'Accept': 'application/json'
        },
      }).then((response) => {

        return response.data
      })
  },
}
/**
 * Upload
 */
export function* upload(data) {
  try {
    const response = yield call(file.upload, data.payload);

    yield put({
      type: ActionTypes.UPLOAD_SUCCESS,
      response
    });

  }
  catch (error) {

    yield put({
      type: ActionTypes.UPLOAD_ERROR,
      error: error.response,
    });
  }
}

/**
 * File Sagas
 */
export default function* root() {
  yield all([
    takeLatest(ActionTypes.UPLOAD, upload),
  ]);
}
