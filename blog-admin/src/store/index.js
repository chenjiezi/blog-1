import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    isFold: false, // 侧栏显示/折叠
    isDrawer: false, // 抽屉显示/隐藏
    device: 'desktop' // desktop / mobile
  },
  mutations: {
    toggleMenu (state) {
      if (state.device === 'desktop') {
        state.isFold = !state.isFold
      } else if (state.device === 'mobile') {
        state.isDrawer = !state.isDrawer
      }
    },
    toggleDevice (state, isMobile) {
      if (isMobile) {
        state.isFold = false
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
