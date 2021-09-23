export default {
  state: {
    activateDialog: false,
  },
  mutations: {
    openThemeList: (state) => {
      state.activateDialog = true;
    },
  },
  actions: {
    openThemeList({ commit }) {
      commit("openThemeList");
    },
  },
};
