import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentIndex1: 1,
    currentIndex2: 1,
    currentUser: null,
    isLogin: false,    
  },
  getters: {
    currentUser: state => state.currentUser,
    isLogin: state => state.isLogin,
  },
  mutations: {
    changeCurrentIndex1(state, key) {
      state.currentIndex1 = key;
    },
    changeCurrentIndex2(state, key) {
      state.currentIndex2 = key;
    },
    userStatus(state, user) {
      if (user) {
        state.currentUser = user;
        state.isLogin = true;
      } else if (user == null) {
        sessionStorage.setItem("user", "null");
        state.currentUser = null;
        state.isLogin = false;
      }
    }
  },
  actions: {
    setUser({commit}, user){
      commit("userStatus",user);
    }
  }
});
