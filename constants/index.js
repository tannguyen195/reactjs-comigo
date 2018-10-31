
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
    UPLOAD_SUCCESS: undefined,
    UPLOAD_ERROR: undefined,

    CHANGE_PHOTO: undefined,
    GET_CROPPED_PHOTO: undefined,
    GET_IMAGE_PAYLOAD: undefined,

    // PEOPLE CONSTANT ACTION TYPE
    GET_PEOPLE_LIST: undefined,
    GET_PEOPLE_LIST_SUCCESS: undefined,
    GET_PEOPLE_LIST_ERROR: undefined,
});

export const STATUS = {
    IDLE: 'idle',
    RUNNING: 'running',
    READY: 'ready',
    SUCCESS: 'success',
    ERROR: 'error',
};

export const endPoint = "http://comigobackend-dev.us-west-1.elasticbeanstalk.com/api/"
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