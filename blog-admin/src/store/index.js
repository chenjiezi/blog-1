import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isStretch: true, // 侧栏显示/隐藏
    device: 'desktop'
  },
  mutations: {
    isStretchCharge (state) {
      if (state.device === 'desktop') {
        state.isStretch = !state.isStretch
      } else {
        console.log('state.device:', state.device)
      }
    },
    toggleDevice (state, isMobile) {
      state.device = isMobile ? 'mobile' : 'desktop'
    }
  },
  actions: {
  },
  modules: {
  }
})
