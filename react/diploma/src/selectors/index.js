
export const getIsUserLoggedIn = state => !!state.auth.token;

export const getProfileLoading = state => state.profile.loading;

export const getProfile = state => state.profile.userData;

export const getLoggedUser = state => state.auth.user;