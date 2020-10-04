import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentIndex1: 1,
    currentIndex2: 1,
  },
  mutations: {
    changeCurrentIndex1(state,key){
      state.currentIndex1 = key;
    },
    changeCurrentIndex2(state,key){
      state.currentIndex2 = key;
    },
  },
  actions: {
  },
  modules: {
  }
})
