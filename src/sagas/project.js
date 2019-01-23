/**
 * @module Sagas/User
 * @desc User
 */

import { all, call, put, takeLatest } from 'redux-saga/effects';
import { notification } from 'antd';
import { ActionTypes } from 'constants/index';
import { Cookies } from 'react-cookie'
import { endPoint } from 'constants/index'
import { Router } from 'routes'
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

        return response.data
      })
  },
  /**
    * Remove a project, returning a {true} when done
    * @param  {string} id The id of the project which will be deleted
    */
  remove(id) {
    // Post a sign in request
    return axios(
      {
        url: endPoint + 'project/' + id,
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': cookies.get('token')
        },
      }).then((response) => {
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
        url: endPoint + 'projects?keyword=' + keyword,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }).then((response) => {
        // window.location.replace("/")
        return response.data
      })
  },
  /**
    * Get project detail of project, returning a project data when done
    * @param  {string} id The id of project which returned when done
    */
  getDetail(id) {
    // Post a sign in request
    return axios(
      {
        url: endPoint + 'project/' + id,
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


  /**
   * Post a new update to a project provied
   * @param  {string} id The id of project
   * @param  {string} content The content of project update
   */
  postProjectUpdate(data) {
    // Post a sign in request
    return axios(
      {
        url: endPoint + 'project/update',
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

  /**
   * edit a new update to a project provied
   * @param  {string} id The id of project
   * @param  {string} content The content of project update
   */
  editProjectUpdate(data) {
    // Post a sign in request
    return axios(
      {
        url: endPoint + 'project/update',
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

  /**
 * remove a new update to a project provied
 * @param  {string} id The id of project
 */
  removeProjectUpdate(data) {
    // Post a sign in request
    return axios(
      {
        url: endPoint + 'project/update',
        method: 'DELETE',
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

  /**
* create a link shred by owner of a project
* @param  {string} id The id of project
*/
  createShareLink(data) {
    // Post a sign in request
    return axios(
      {
        url: endPoint + 'project/shareCode',
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

  /**
* accept a link shred by owner of a project
* @param  {string} id The id of project
*/
  acceptShareLink(data) {
    // Post a sign in request
    return axios(
      {
        url: endPoint + 'project/acceptShareLink',
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

  /**
  *remove a ollaborator from a project by project owner
  * @param  {string} id The id of collaborator
  */
  removeSharedUser(data) {
    // Post a sign in request
    return axios(
      {
        url: endPoint + 'project/removeCollaborator',
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
  }
  ,
  /**
  *remove a ollaborator from a project by project owner
  * @param  {string} id The id of collaborator
  */
  editUserRole(data) {
    // Post a sign in request
    return axios(
      {
        url: endPoint + 'project/collaboratorRole',
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
  }
  ,
  /**
   get major list 
  */
  getMajorList(data) {

    return axios(
      {
        url: endPoint + 'major/list',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': cookies.get('token')
        },
        data: JSON.stringify(data),
      }).then((response) => {
        // window.location.replace("/")
        return response.data
      })
  }
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


    notification['success']({
      message: 'Comigo',
      description: response.message,
    });

    window.location.replace('/profile')
  }
  catch (error) {
    yield put({
      type: ActionTypes.CREATE_ERROR,
      error: error.response,
    });
    notification['error']({
      message: 'Something went wrong!',
      description: "Fail to create project",
    });
  }
}


/**
 * update a project
 */
export function* update(data) {
  try {
    const response = yield call(project.update, data.payload);
    notification['success']({
      message: 'Comigo',
      description: response.message,
    });
    yield put({
      type: ActionTypes.UPDATE_SUCCESS,
      response
    });
  }
  catch (error) {

    notification['error']({
      message: 'Something went wrong!',
      description: "Fail to update project",
    });
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
    window.location.replace('/profile')

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
 * post project update
 */
export function* postProjectUpdate(data) {
  try {
    const response = yield call(project.postProjectUpdate, data.payload);

    yield put({
      type: ActionTypes.POST_PROJECT_UPDATE_SUCCESS,
      response
    });
  }
  catch (error) {
    yield put({
      type: ActionTypes.POST_PROJECT_UPDATE_ERROR,
      error: error.response,
    });
  }
}

/**
 * edit project update
 */
export function* editProjectUpdate(data) {
  try {
    const response = yield call(project.editProjectUpdate, data.payload);
    yield put({
      type: ActionTypes.EDIT_PROJECT_UPDATE_SUCCESS,
      response
    });
  }
  catch (error) {
    yield put({
      type: ActionTypes.EDIT_PROJECT_UPDATE_ERROR,
      error: error.response,
    });
  }
}

/**
 * remove project update
 */
export function* removeProjectUpdate(data) {
  try {
    const response = yield call(project.removeProjectUpdate, data.payload);
    yield put({
      type: ActionTypes.REMOVE_PROJECT_UPDATE_SUCCESS,
      response
    });
  }
  catch (error) {
    yield put({
      type: ActionTypes.REMOVE_PROJECT_UPDATE_ERROR,
      error: error.response,
    });
  }
}

/**
 * user create share link to a new project
 */
export function* createShareLink(data) {
  try {
    const response = yield call(project.createShareLink, data.payload);
    yield put({
      type: ActionTypes.CREATE_SHARE_LINK_SUCCESS,
      response
    });
    notification['success']({
      message: 'Comigo',
      description: response.message,
    });
  }
  catch (error) {
    notification['error']({
      message: 'Something went wrong!',
      description: "Fail to remove collaborator",
    });
    yield put({
      type: ActionTypes.CREATE_SHARE_LINK_ERROR,
      error: error.response,
    });
  }
}
/**
 * user accept share link to a new project
 */
export function* acceptShareLink(data) {
  try {
    const response = yield call(project.acceptShareLink, data.payload);
    yield put({
      type: ActionTypes.ACCEPT_SHARE_LINK_SUCCESS,
      response
    });
  }
  catch (error) {
    yield put({
      type: ActionTypes.ACCEPT_SHARE_LINK_ERROR,
      error: error.response,
    });
  }
}

/**
 *remove user from a project
 */
export function* removeSharedUser(data) {
  try {
    const response = yield call(project.removeSharedUser, data.payload);
    yield put({
      type: ActionTypes.REMOVE_SHARED_USER_SUCCESS,
      response
    });
    notification['success']({
      message: 'Comigo',
      description: response.message,
    });
  }
  catch (error) {
    yield put({
      type: ActionTypes.REMOVE_SHARED_USER_ERROR,
      error: error.response,
    });
    notification['error']({
      message: 'Something went wrong!',
      description: "Fail to remove collaborator",
    });
  }
}
/**
 *edit user role of a project
 */
export function* editUserRole(data) {
  try {
    const response = yield call(project.editUserRole, data.payload);
    yield put({
      type: ActionTypes.EDIT_USER_ROLE_SUCCESS,
      response
    });
    notification['success']({
      message: 'Comigo',
      description: response.message,
    });
  }
  catch (error) {
    yield put({
      type: ActionTypes.EDIT_USER_ROLE_ERROR,
      error: error.response,
    });
    notification['error']({
      message: 'Something went wrong!',
      description: "Fail to change collaborator's role",
    });
  }
}

/**
 *get major list
 */
export function* getMajorList(data) {
  try {
    const response = yield call(project.getMajorList, data.payload);
    yield put({
      type: ActionTypes.GET_MAJOR_LIST_SUCCESS,
      response
    });

  }
  catch (error) {
    yield put({
      type: ActionTypes.GET_MAJOR_LIST_ERROR,
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
    takeLatest(ActionTypes.POST_PROJECT_UPDATE, postProjectUpdate),
    takeLatest(ActionTypes.EDIT_PROJECT_UPDATE, editProjectUpdate),
    takeLatest(ActionTypes.REMOVE_PROJECT_UPDATE, removeProjectUpdate),
    takeLatest(ActionTypes.CREATE_SHARE_LINK, createShareLink),
    takeLatest(ActionTypes.ACCEPT_SHARE_LINK, acceptShareLink),
    takeLatest(ActionTypes.REMOVE_SHARED_USER, removeSharedUser),
    takeLatest(ActionTypes.EDIT_USER_ROLE, editUserRole),
    takeLatest(ActionTypes.GET_MAJOR_LIST, getMajorList),
  ]);
}
