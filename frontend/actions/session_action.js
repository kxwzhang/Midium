import * as SessionApiUtil from '../util/session_api_util';
import { receiveErrors } from './error_action';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const signup = user => dispatch => (
    SessionApiUtil.signup(user)
        .then(
            user => dispatch(receiveCurrentUser(user)),
            errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const login = user => dispatch => (
    SessionApiUtil.login(user)
        .then(
            user => dispatch(receiveCurrentUser(user)),
            errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const logout = () => dispatch => (
    SessionApiUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
);
