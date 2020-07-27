import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    isLoading: false,
    mixBlendHover: false,
  },
  actions: {
    //loading
    loadingHandler(context, payload) {
      context.commit("LOADING", payload);
    },
    mixBlendHandler(context, payload) {
      context.commit("MIX_BLEND", payload);
    },
  },
  mutations: {
    LOADING(state, payload) {
      state.isLoading = payload;
    },
    MIX_BLEND(state, payload) {
      state.mixBlendHover = payload;
    },
  },

  modules: {},
});
