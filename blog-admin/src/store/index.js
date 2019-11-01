import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isStretch: true // 侧栏显示/隐藏
  },
  mutations: {
    isStretchCharge (state) {
      state.isStretch = !state.isStretch
    }
  },
  actions: {
  },
  modules: {
  }
})
