
import { Cookies } from 'react-cookie'
const cookies = new Cookies()


// Sign In api
export const signIn = (data) => {

    return (dispatch) => {
        cookies.set('token',
            "token",
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