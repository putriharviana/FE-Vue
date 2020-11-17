/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    getCounter: state => {
      return state.count
    }
  },
  mutations: {
    increment(state) {
      if (state.count < 50)
        state.count++
    },
    decrement(state) {
      if (state.count > 0) {
        state.count--
      }
    },
    reset(state) {
      state.count = 0;
    }
  }
})