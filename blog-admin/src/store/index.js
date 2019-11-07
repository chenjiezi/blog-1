import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    isStretch: true, // 侧栏显示/隐藏
    isDrawer: false, // 抽屉显示/隐藏
    device: 'desktop'
  },
  mutations: {
    isStretchCharge (state) {
      if (state.device === 'desktop') {
        state.isStretch = !state.isStretch
      } else if (state.device === 'mobile') {
        state.isDrawer = !state.isDrawer
      }
    },
    toggleDevice (state, isMobile) {
      if (isMobile) {
        state.isStretch = true
      } else {
        state.isDrawer = false
      }
      state.device = isMobile ? 'mobile' : 'desktop'
    }
  },
  actions: {
  },
  modules: {
  }
})
