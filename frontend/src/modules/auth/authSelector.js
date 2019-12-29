import { createSelector } from "reselect";

const selectRaw = state => state.auth;

const selectCurrentUser = createSelector([selectRaw], auth => auth.currentUser);

const selectCurrentUserFullName = createSelector(
    [selectCurrentUser],
    currentUser =>
        currentUser ? currentUser.firstName + " " + currentUser.lastName : null
);

const selectCurrentUserEmail = createSelector(
    [selectCurrentUser],
    currentUser => (currentUser ? currentUser.email : null)
);

const selectLoading = createSelector(
    [selectRaw], 
    auth => !!auth.loading
);

const selectLoadingInit = createSelector(
    [selectRaw],
    auth => !!auth.loadingInit
);

const loadingEmailConfirmation = createSelector(
    [selectRaw],
    auth => !!auth.loadingEmailConfirmation
);

const selectErrorMessage = createSelector(
    [selectRaw],
    auth => auth.errorMessage
);

const selectors = {
    selectCurrentUser,
    selectCurrentUserFullName,
    selectCurrentUserEmail,
    selectLoading,
    selectLoadingInit,
    loadingEmailConfirmation,
    selectErrorMessage
};

export default selectors;
