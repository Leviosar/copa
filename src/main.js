import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import countries from './data/countries.json'
import stickers from './data/stickers.json'
import "./assets/sass/app.scss";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import LocalStorage from './services/storage/local'

Vue.config.productionTip = false

store.dispatch('config', { driver: new LocalStorage() })
store.dispatch('user/listen')

store.commit('country/set', countries)
store.commit('sticker/set', stickers.stickers)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
