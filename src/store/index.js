import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: [],
    stickers: [],
  },
  mutations: {
    setCountries(state, countries) {
      state.countries = countries;
    },
    setStickers(state, stickers) {
      state.stickers = stickers;
    },
    toggleSticker(state, sticker) {
      sticker.status = !sticker.status;
    },
    clearStickers(state) {
      state.stickers.forEach(sticker => sticker.status = 0);
    },
    fillStickers(state) {
      state.stickers.forEach(sticker => sticker.status = 1);
    },
    persist(state) {
      localStorage.setItem('countries', JSON.stringify(state.countries));
      localStorage.setItem('stickers', JSON.stringify(state.stickers));
    },
    restore(state) {
      let countries = localStorage.getItem('countries');
      let stickers = localStorage.getItem('stickers');
      
      if (countries) {
        state.countries = JSON.parse(countries);
      }
      
      if (stickers) {
        state.stickers = JSON.parse(stickers);
      }
    }
  },
  actions: {
    toggleSticker({ commit }, sticker) {
      commit('toggleSticker', sticker);
      commit('persist');
    },
    clearStickers({ commit }) {
      commit('clearStickers');
      commit('persist');
    },
    fillStickers({ commit }) {
      commit('fillStickers');
      commit('persist');
    }
  },
  modules: {
  }
})
