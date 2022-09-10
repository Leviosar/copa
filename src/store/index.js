import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    restore({ commit }) {
      if (!commit('country/restore')) {
        commit('country/persist')
      }
      
      if (!commit('sticker/restore')) {
        commit('sticker/persist')
      }
    },
    config({ commit }, { driver }) {
      commit('user/config', { driver })
      commit('country/config', { driver })
      commit('sticker/config', { driver })
    }
  },
  modules: modules
})
