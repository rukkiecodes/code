import VueCookie from "vue-cookie";

export default {
  state: {
    activateDialog: false,
    codeThemeColor: "",
    codeThemeName: "",
    codeThemeTitle: "",
  },
  mutations: {
    openThemeList: (state) => {
      state.activateDialog = true;
    },
    setEditorTheme: (state, theme) => {
      VueCookie.set("code theme color", theme.color);
      VueCookie.set("code theme name", theme.name);
      VueCookie.set("code theme title", theme.title);
      // state.activateDialog = false
    },
    getEditorTheme: (state) => {
      setInterval(() => {
        state.codeThemeColor = VueCookie.get("code theme color");
        state.codeThemeName = VueCookie.get("code theme name");
        state.codeThemeTitle = VueCookie.get("code theme title");
      }, 1000);
    },
  },
  actions: {
    openThemeList({ commit }) {
      commit("openThemeList");
    },
    setEditorTheme({ commit }, theme) {
      commit("setEditorTheme", theme);
    },
    getEditorTheme({ commit }) {
      commit("getEditorTheme");
    },
  },
};
