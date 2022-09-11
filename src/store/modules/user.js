import { onAuthStateChanged } from "firebase/auth"
import Firebase from "../../plugins/firebase"
import DatabaseService from "../../services/database/firebase_database"
import RemoteStorage from "../../services/storage/remote"

const state = {
  data: null,
  driver: null
}

const mutations = {
  config(state, { driver }) {
    state.driver = driver
  },
  set(state, { email, displayName, phoneNumber, photoURL, uid }) {
    state.data = { email, displayName, phoneNumber, photoURL, uid }
  },
  clear(state) {
    state.data = null
  },
  persist(state) {
    state.driver.write(`users/${state.data.uid}`, state.data)
  },
}

const actions = {
  authenticated({ commit, dispatch }, user) {
    // Setting local reference to new user
    commit('set', user)

    // Switching to remote user-based storage
    const driver = new RemoteStorage(user)
    dispatch('config', { driver }, { root: true })

    const service = new DatabaseService()

    service.read(`users/${user.uid}`, (snapshot) => {
      if (snapshot.val() === null) { // If the user wasn't in the database, create a blank user there
        commit('persist')
        commit('sticker/persist', null, { root: true })
      } else { // Otherwise restore data from current user
        const model = snapshot.val()

        if (model.stickers) {
          commit('sticker/set', model.stickers, { root: true })
        } else {
          commit('sticker/persist', null, { root: true })
        }
      }
    })
  },
  logout({commit}) {
    commit('clear')
    commit('sticker/clear', null, { root: true })
  },
  listen({ dispatch }) {
    onAuthStateChanged(Firebase.auth(), (user) => {
      if (user) {
        dispatch('authenticated', user)
      } else {
        dispatch('logout')
      }
    })
  }
}

const module = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default module