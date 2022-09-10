const state = {
  data: null,
  driver: null
}

const mutations = {
  set(state, sticker) {
    state.data = sticker
  },
  config(state, { driver }) {
    state.driver = driver
  },
  restore(state) {
    const countries = state.driver.read('countries')

    if (!countries) return false

    return state.data = countries
  },
  persist(state) {
    state.driver.write('countries', state.data)
  }
}

const module = {
  namespaced: true,
  state,
  mutations,
}

export default module