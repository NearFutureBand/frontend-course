
export const getIsUserLoggedIn = state => !!state.auth.token;

export const getToken = state => state.auth.token;

export const getProfileLoading = state => state.profile.loading;

export const getProfile = state => {
  const profile = state.profile.userData;
  const loggedInUser = getLoggedInUser(state);
  
  if (loggedInUser) {
    const friend = loggedInUser.friends.find(f => f.index === profile?.index);

    return {
      ...profile,
      isFriend: !!friend,
    };
  }

  return profile;
}

export const getLoggedInUser = state => state.auth.user;

export const getUserList = (state) => {
  return state.users.users;
}