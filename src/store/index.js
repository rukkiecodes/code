import Vue from "vue";
import Vuex from "vuex";

import themeList from "./modules/themeList";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    themeList,
  },
});
