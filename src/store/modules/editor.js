export default {
  state: {
    showInitialBackground: true,
    showHTML: false,
    showCSS: false,
    showJS: false,
  },
  mutations: {
    showHTMLEditor: (state) => {
      state.showInitialBackground = false;
      state.showHTML = true;
      state.showCSS = false;
      state.showJS = false;
    },
    showCSSEditor: (state) => {
      state.showInitialBackground = false;
      state.showHTML = false;
      state.showCSS = true;
      state.showJS = false;
    },
    showJSEditor: (state) => {
      state.showInitialBackground = false;
      state.showHTML = false;
      state.showCSS = false;
      state.showJS = true;
    },
    closeHTMLEditor: (state) => {
      state.showInitialBackground = true;
      state.showHTML = false;
      state.showCSS = false;
      state.showJS = false;
    },
    closeCSSEditor: (state) => {
      state.showInitialBackground = true;
      state.showHTML = false;
      state.showCSS = false;
      state.showJS = false;
    },
    closeJSEditor: (state) => {
      state.showInitialBackground = true;
      state.showHTML = false;
      state.showCSS = false;
      state.showJS = false;
    },
  },
  actions: {
    showHTMLEditor({ commit }) {
      commit("showHTMLEditor");
    },
    showCSSEditor({ commit }) {
      commit("showCSSEditor");
    },
    showJSEditor({ commit }) {
      commit("showJSEditor");
    },
    closeHTMLEditor({ commit }) {
      commit("closeHTMLEditor");
    },
    closeCSSEditor({ commit }) {
      commit("closeCSSEditor");
    },
    closeJSEditor({ commit }) {
      commit("closeJSEditor");
    },
  },
};
