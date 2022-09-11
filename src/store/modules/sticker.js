const state = {
  data: null,
  driver: null
}

const mutations = {
  config(state, { driver }) {
    state.driver = driver
  },
  set(state, stickers) {
    state.data = stickers
  },
  persist(state) {
    state.driver.write('stickers', state.data, { namespaced: true })
  },
  restore(state) {
    const stickers = state.driver.read('stickers', { namespaced: true })

    if (!stickers) return false

    return state.data = stickers
  },
  update(state, sticker) {
    state.driver.update(`stickers/${sticker.id}`, sticker, { namespaced: true })
  },
  add(state, sticker) {
    sticker.status++;
  },
  sub(state, sticker) {
    if (sticker.status > 0) {
      sticker.status--;
    }
  },
  clear(state) {
    state.data.forEach(sticker => sticker.status = 0);
  },
  fill(state) {
    state.data.forEach(sticker => sticker.status = 1);
  },
}

const actions = {
  persist({commit}, {sticker}) {
    if (sticker != undefined) {
      commit('update', sticker)
    } else {
      commit('persist')
    }
  },
  add({ commit }, sticker) {
    commit('add', sticker);
    commit('update', sticker);
  },
  sub({ commit }, sticker) {
    commit('sub', sticker);
    commit('update', sticker);
  },
  clear({ commit }) {
    commit('clear');
    commit('persist');
  },
  fill({ commit }) {
    commit('fill');
    commit('persist');
  },
}

const module = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default module