import * as types from '../actions/types';

const initial = {
    isLoggedIn: false,
}
const authReducer = (state = initial, action) => {
    switch (action.type) {
        case types.SIGN_IN_SUCCESS:
            return {
                isLoggedIn: true
            };
        default:
            return state;
    }
};

export default authReducer;
