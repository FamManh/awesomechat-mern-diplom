import { signup, signin, verifyEmail } from "./authService";
import Errors from "../shared/error/errors";
import { getHistory } from "../store";

const prefix = "AUTH";

const actions = {
    ERROR_MESSAGE_CLEARED: `${prefix}_ERROR_MESSAGE_CLEARED`,

    AUTH_INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
    AUTH_INIT_ERROR: `${prefix}_INIT_ERROR`,

    AUTH_START: `${prefix}_START`,
    AUTH_SUCCESS: `${prefix}_SUCCESS`,
    AUTH_ERROR: `${prefix}_ERROR`,

    PASSWORD_RESET_START: `${prefix}_PASSWORD_RESET_START`,
    PASSWORD_RESET_ERROR: `${prefix}_PASSWORD_RESET_ERROR`,
    PASSWORD_RESET_SUCCESS: `${prefix}_PASSWORD_RESET_SUCCESS`,

    EMAIL_CONFIRM_START: `${prefix}_EMAIL_CONFIRM_START`,
    EMAIL_CONFIRM_SUCCESS: `${prefix}_EMAIL_CONFIRM_SUCCESS`,
    EMAIL_CONFIRM_ERROR: `${prefix}_EMAIL_CONFIRM_ERROR`,

    doClearErrorMessage() {
        return {
            type: actions.ERROR_MESSAGE_CLEARED
        };
    },

    doSignup: (firstname, lastname, email, password) => async dispatch => {
        try {
            dispatch({ type: actions.AUTH_START });
            let currentUser = await signup(
                firstname,
                lastname,
                email,
                password
            );
            dispatch({
                type: actions.AUTH_SUCCESS,
                payload: {
                    currentUser
                }
            });
        } catch (error) {
            if (Errors.errorCode(error) !== 400) {
                Errors.handle(error);
            }
            dispatch({
                type: actions.AUTH_ERROR,
                payload: Errors.selectMessage(error)
            });
        }
    },

    doSignin: (email, password) => async dispatch => {
        try {
            dispatch({ type: actions.AUTH_START });
            let currentUser = await signin(email, password);

            window.localStorage.setItem("asauth", JSON.stringify(currentUser));
            dispatch({
                type: actions.AUTH_SUCCESS,
                payload: {
                    currentUser
                }
            });
            getHistory().push("/");
        } catch (error) {
            if (Errors.errorCode(error) !== 400) {
                Errors.handle(error);
            }
            dispatch({
                type: actions.AUTH_ERROR,
                payload: Errors.selectMessage(error)
            });
        }
    },

    doSignout: async dispatch => {
        try {
            dispatch({ type: actions.AUTH_START });

            window.localStorage.removeItem("asauth");

            dispatch({
                type: actions.AUTH_SUCCESS,
                payload: {
                    currentUser: null
                }
            });
            getHistory().push("/signin");
        } catch (error) {
            if (Errors.errorCode(error) !== 400) {
                Errors.handle(error);
            }

            dispatch({
                type: actions.AUTH_ERROR,
                payload: Errors.selectMessage(error)
            });
        }
    },

    verifyEmail: email => async dispatch => {
        try {
            console.log(email);

            dispatch({ type: actions.EMAIL_CONFIRM_START });
            console.log(email);
            let verify = await verifyEmail(email);
            console.log(verify);
            dispatch({ type: actions.EMAIL_CONFIRM_SUCCESS });
            getHistory().push("/email-verifivation");
        } catch (error) {
            if (Errors.errorCode(error) !== 400) {
                Errors.handle(error);
            }

            dispatch({
                type: actions.EMAIL_CONFIRM_ERROR,
                payload: Errors.selectMessage(error)
            });
        }
    }
};

export default actions;
