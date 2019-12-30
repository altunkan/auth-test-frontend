const state = {
  isAuthenticated: false,
  currentUser: {
    userId: "",
    email: ""
  },
  intervalName: ""
};

const getters = {
  getIsAuthenticated(state) {
    return state.isAuthenticated;
  },
  getCurrentUser(state) {
    return state.currentUser;
  },
  getIntervalName(state) {
    return state.intervalName;
  }
};

const mutations = {
  setIsAuthenticated(state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated;
  },
  setCurrentUser(state, currentUser) {
    state.currentUser.userId = currentUser.userId;
    state.currentUser.email = currentUser.email;
  },
  setIntervalName(state, intervalName) {
    state.intervalName = intervalName;
  },
  clearCurrentUser(state) {
    state.currentUser.userId = "";
    state.currentUser.email = "";
  }
};

const actions = {
  async login({ commit, dispatch }, loginData) {},
  async getCurrentUser({ commit, dispatch }) {},
  async refresh({ commit, dispatch, getters }) {},
  async logout({ commit, dispatch, getters }) {}
};

export default {
  namespaced: false,
  state,
  getters,
  mutations,
  actions
};
