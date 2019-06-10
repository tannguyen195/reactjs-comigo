
import keyMirror from 'fbjs/lib/keyMirror';

/**
 * @namespace Constants
 * @desc App constants
 */

/**
 * @constant {Object} ActionTypes
 * @memberof Constants
 */

export const ActionTypes = keyMirror({

    // TOGGLE CONSTANT ACTION TYPE
    TOGGLE_HOME_VIEW: undefined,
    TOGGLE_PREVIEW_IMAGE: undefined,
    TOGGLE_COLLABORATOR: undefined,
    TOGGLE_JOB_DETAIL: undefined,
    TOGGLE_REMOVE_COLLABORATOR: undefined,
    TOGGLE_EDIT_UPDATE: undefined,
    TOGGLE_EDIT_COMMENT: undefined,
    TOGGLE_POST_JOB: undefined,
    TOGGLE_EDIT_JOB: undefined,
    TOGGLE_REMOVE_JOB: undefined,
    TOGGLE_FORGOT_MODAL: undefined,


    // USER CONSTANT ACTION TYPE
    LOGIN: undefined,
    LOGIN_SUCCESS: undefined,
    LOGIN_ERROR: undefined,

    NEXT_STEP: undefined,
    LOGOUT: undefined,

    SIGNUP: undefined,
    SIGNUP_SUCCESS: undefined,
    SIGNUP_ERROR: undefined,

    VERIFY: undefined,
    VERIFY_SUCCESS: undefined,
    VERIFY_ERROR: undefined,

    GET_PROFILE: undefined,
    GET_PROFILE_SUCCESS: undefined,
    GET_PROFILE_ERROR: undefined,

    UPDATE_PROFILE: undefined,
    UPDATE_PROFILE_SUCCESS: undefined,
    UPDATE_PROFILE_ERROR: undefined,

    RESEND: undefined,
    RESEND_SUCCESS: undefined,
    RESEND_ERROR: undefined,

    // PROJECT CONSTANT ACTION TYPE
    CREATE: undefined,
    CREATE_SUCCESS: undefined,
    CREATE_ERROR: undefined,

    UPDATE: undefined,
    UPDATE_SUCCESS: undefined,
    UPDATE_ERROR: undefined,

    REMOVE: undefined,
    REMOVE_SUCCESS: undefined,
    REMOVE_ERROR: undefined,

    CREATE_LINK: undefined,
    CREATE_LINK_SUCCESS: undefined,
    CREATE_LINK_ERROR: undefined,

    GET_LIST: undefined,
    GET_LIST_SUCCESS: undefined,
    GET_LIST_ERROR: undefined,

    GET_DETAIL: undefined,
    GET_DETAIL_SUCCESS: undefined,
    GET_DETAIL_ERROR: undefined,

    // FILE CONSTANT ACTION TYPE    
    UPLOAD: undefined,
    UPLOAD_IMAGE: undefined,
    UPLOAD_IMAGE_SUCCESS: undefined,
    UPLOAD_IMAGE_ERROR: undefined,

    UPLOAD_SUCCESS: undefined,
    UPLOAD_ERROR: undefined,

    CHANGE_PHOTO: undefined,
    GET_CROPPED_PHOTO: undefined,
    GET_IMAGE_PAYLOAD: undefined,

    // PEOPLE CONSTANT ACTION TYPE
    GET_PEOPLE_LIST: undefined,
    GET_PEOPLE_LIST_SUCCESS: undefined,
    GET_PEOPLE_LIST_ERROR: undefined,

    GET_PEOPLE_DETAIL: undefined,
    GET_PEOPLE_DETAIL_SUCCESS: undefined,
    GET_PEOPLE_DETAIL_ERROR: undefined,

    SUBCRIBE: undefined,
    SUBCRIBE_SUCCESS: undefined,
    SUBCRIBE_ERROR: undefined,

    // PROJECT UPDATE CONSTANT ACTION TYPE
    POST_PROJECT_UPDATE: undefined,
    POST_PROJECT_UPDATE_SUCCESS: undefined,
    POST_PROJECT_UPDATE_ERROR: undefined,

    EDIT_PROJECT_UPDATE: undefined,
    EDIT_PROJECT_UPDATE_SUCCESS: undefined,
    EDIT_PROJECT_UPDATE_ERROR: undefined,

    REMOVE_PROJECT_UPDATE: undefined,
    REMOVE_PROJECT_UPDATE_SUCCESS: undefined,
    REMOVE_PROJECT_UPDATE_ERROR: undefined,

    POST_COMMENT: undefined,
    POST_COMMENT_SUCCESS: undefined,
    POST_COMMENT_ERROR: undefined,

    EDIT_COMMENT: undefined,
    EDIT_COMMENT_SUCCESS: undefined,
    EDIT_COMMENT_ERROR: undefined,

    REMOVE_COMMENT: undefined,
    REMOVE_COMMENT_SUCCESS: undefined,
    REMOVE_COMMENT_ERROR: undefined,

    CREATE_SHARE_LINK: undefined,
    CREATE_SHARE_LINK_SUCCESS: undefined,
    CREATE_SHARE_LINK_ERROR: undefined,

    ACCEPT_SHARE_LINK: undefined,
    ACCEPT_SHARE_LINK_SUCCESS: undefined,
    ACCEPT_SHARE_LINK_ERROR: undefined,

    EDIT_PROJECT_UPDATE: undefined,
    EDIT_PROJECT_UPDATE_SUCCESS: undefined,
    EDIT_PROJECT_UPDATE_ERROR: undefined,

    REMOVE_SHARED_USER: undefined,
    REMOVE_SHARED_USER_SUCCESS: undefined,
    REMOVE_SHARED_USER_ERROR: undefined,

    EDIT_USER_ROLE: undefined,
    EDIT_USER_ROLE_SUCCESS: undefined,
    EDIT_USER_ROLE_ERROR: undefined,

    GET_MAJOR_LIST: undefined,
    GET_MAJOR_LIST_SUCCESS: undefined,
    GET_MAJOR_LIST_ERROR: undefined,

    GET_BADGE_LIST: undefined,
    GET_BADGE_LIST_SUCCESS: undefined,
    GET_BADGE_LIST_ERROR: undefined,

    GIVE_BADGE: undefined,
    GIVE_BADGE_SUCCESS: undefined,
    GIVE_BADGE_ERROR: undefined,

    POST_JOB: undefined,
    POST_JOB_SUCCESS: undefined,
    POST_JOB_ERROR: undefined,

    GET_JOB_DETAIL: undefined,
    GET_JOB_DETAIL_SUCCESS: undefined,
    GET_JOB_DETAIL_ERROR: undefined,

    DELETE_JOB: undefined,
    DELETE_JOB_SUCCESS: undefined,
    DELETE_JOB_ERROR: undefined,

    UPDATE_JOB: undefined,
    UPDATE_JOB_SUCCESS: undefined,
    UPDATE_JOB_ERROR: undefined,

    LIST_JOB: undefined,
    LIST_JOB_SUCCESS: undefined,
    LIST_JOB_ERROR: undefined,

    SEND_PASSWORD_RESET: undefined,
    SEND_PASSWORD_RESET_SUCCESS: undefined,
    SEND_PASSWORD_RESET_ERROR: undefined,

    RESET_PASSWORD: undefined,
    RESET_PASSWORD_SUCCESS: undefined,
    RESET_PASSWORD_ERROR: undefined,

    CHANGE_PASSWORD: undefined,
    CHANGE_PASSWORD_SUCCESS: undefined,
    CHANGE_PASSWORD_ERROR: undefined,

    SET_STEP: undefined,

    UPDATE_CREATE_PROJECT: undefined
});

export const STATUS = {
    IDLE: 'idle',
    RUNNING: 'running',
    READY: 'ready',
    SUCCESS: 'success',
    ERROR: 'error',
};

export const endPoint = "https://comigo-backend.herokuapp.com/api/"
//export const endPoint = "http://192.168.86.51:5000/api/"
//export const endPoint = "http://comigobackend-dev.us-west-1.elasticbeanstalk.com/api/"
//export const endPoint = "http://comigobackend-production.us-west-1.elasticbeanstalk.com/api/"

export const googleApi = "[Your google api]"
export const googleClientID = "[Your google client ID]"
export const facebookAppID = "[Your facebook app ID]"
export const videoURL = "https://www.youtube.com/embed/peE-lxPxYOA"


export const renderMessage = (err) => {
    switch (err) {
        case 401:
            return "Invalid combination. Have another go."
        case 500:
            return "This email has already been used by another account"
        default:
            return "Something went wrong!"
    }
}

export const commitment = ["a few hours", "a few days", "few weeks", "a semester "]
export const incentive = ["gratitude", "food", "pay", "resume", "other", "nothing for now"]