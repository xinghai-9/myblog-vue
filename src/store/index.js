import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentIndex1: 1,
    currentIndex2: 1,
    currentUserName: null,
    isLogin: false,
  },
  getters: {
    currentUserName: state => state.currentUserName,
    isLogin: state => state.isLogin,
  },
  mutations: {
    changeCurrentIndex1(state, key) {
      state.currentIndex1 = key;
    },
    changeCurrentIndex2(state, key) {
      state.currentIndex2 = key;
    },
    userStatus(state, username) {
      if (username) {
        state.currentUserName = username;
        state.isLogin = true;
      } else if (username == null) {
        sessionStorage.setItem("userName", null);
        state.currentUserName = null;
        state.isLogin = false;
      }
    }
  },
  actions: {
    setUserName({commit}, username){
      commit("userStatus",username);
    }
  }
});
