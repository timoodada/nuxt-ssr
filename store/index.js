export const state = () => ({
  userInfo: {
    status: -1,
    nickname: '',
  },
});

export const mutations = {
  setUserInfo(state, userInfo) {
    Object.assign(state.userInfo, userInfo);
  },
};

export const getters = {
  userStatus(state) {
    return state.userInfo.status;
  },
};
