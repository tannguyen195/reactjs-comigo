
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
