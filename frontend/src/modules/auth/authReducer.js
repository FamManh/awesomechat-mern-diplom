import actions from "./authAction";

const initData = {
    currentUser: null,
    loadingInit: true,
    loadingEmailConfirmation: false,
    loadingPasswordReset: false,
    loading: false,
    errorMessage: null
};

export default (state = initData, { type, payload }) => {
    switch (type) {
        case actions.ERROR_MESSAGE_CLEARED:
            return { ...state, errorMessage: null };
        case actions.AUTH_START:
            return { ...state, errorMessage: null, loading: true };
        case actions.AUTH_SUCCESS:
            return {
                ...state,
                currentUser: payload.currentUser || null,
                errorMessage: null,
                loading: false
            };
        case actions.AUTH_ERROR:
            return {
                ...state,
                currentUser: null,
                errorMessage: payload || null,
                loading: false
            };

        case actions.EMAIL_CONFIRM_START:
            return {
                ...state,
                errorMessage: null,
                loadingEmailConfirmation: true
            };
        case actions.EMAIL_CONFIRM_SUCCESS:
            return {
                ...state,
                errorMessage: null,
                loadingEmailConfirmation: false
            };
        case actions.EMAIL_CONFIRM_ERROR:
            return {
                ...state,
                errorMessage: payload || null,
                loadingEmailConfirmation: false
            };
        default:
            return { ...state };
    }
};
