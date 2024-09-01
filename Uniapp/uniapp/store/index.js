import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    username: "未登陆",
  },
  mutations: {
    MLOGIN(state, username) {
      state.username = username;
    },
    MLOGOUT(state) {
      state.username = "退出";
    },
  },
  actions: {
    login(context, username) {
      context.commit("MLOGIN", username);
    },
    logout(context) {
      context.commit("MLOGOUT");
    },
  },
});

export default store;
