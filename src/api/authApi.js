
import {

} from '../actions/authAction.js'
import {
    toggleSignInModal,
    toggleErrorSignInPopOver, toggleErrorSignUpPopOver
} from '../actions/toggleAction'
import { apiUrl } from 'config'
import { Cookies } from 'react-cookie'
const cookies = new Cookies()

// Sign Up api

// Sign In api
export const signIn = (data) => {

    return (dispatch) => {
        cookies.set('token',
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJVc2VyTmFtZSI6IlTDom4gTmd1eeG7hW4iLCJVc2VySWQiOjQsInJvbGVzIjpbInVzZXIiXSwiaXNzIjoicGlnZW9uX2F1dGgiLCJleHAiOjE1MzUyMTIxMjIsImlhdCI6MTUzNTEyNTcyMn0.3l3rvi_FUSDXaeRKd_idWBY4_jqSaTw5CJZm3-pYd7Y-FvDkw3ZMcbf5uEdKxr06",
            { path: '/' })
        window.location.replace("/")
    }
}

export const logout = () => {
    return (dispatch) => {
        cookies.remove('token', { path: '/' })
        window.location.replace("/")
    }
}