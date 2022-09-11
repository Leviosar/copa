<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        Tabela de Figurinhas - Qatar 2022
      </div>

      <v-spacer></v-spacer>

      <v-btn v-if="!$store.state.user.data" small @click="auth" elevation="0" fab color="primary">
        <v-icon>mdi-google</v-icon>
      </v-btn>

      <v-menu v-else offset-y close-on-content-click>
        <template v-slot:activator="{ on, attrs }">
          <v-avatar v-bind="attrs" v-on="on" size="32">
            <v-img no-referrer :src="$store.state.user.data.photoURL"></v-img>
          </v-avatar>
        </template>
        <v-list>
          <v-list-item @click="logout">
            <v-list-item-title>Sair</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn small @click="fill" elevation="0" fab color="primary">
        <v-icon>mdi-plus</v-icon>
      </v-btn>

      <v-btn small @click="clear" elevation="0" fab color="primary">
        <v-icon>mdi-delete</v-icon>
      </v-btn>

      <template v-slot:extension v-if="mobile">
        <ProgressTop/>
      </template>
    </v-app-bar>


    <v-main>
      <router-view/>
    </v-main>

    <Footer/>

    <Sidecar/>
  </v-app>
</template>

<script>

import Sidecar from './components/Sidecar.vue'
import ProgressTop from './components/ProgressTop.vue'
import Footer from './components/Footer.vue'
import GoogleAuthService from './services/auth/google_auth'

export default {
  name: 'App',

  components: {
    Sidecar,
    Footer,
    ProgressTop
  },

  data: () => ({
    //
  }),

  computed:{
    theme(){
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    },
    mobile() {
      return this.$vuetify.breakpoint.xsOnly
    }
  },

  methods: {
    clear() {
      this.$store.dispatch('sticker/clear');
    },
    fill() {
      this.$store.dispatch('sticker/fill');
    },
    auth() {
      new GoogleAuthService().auth()
    },
    logout() {
      new GoogleAuthService().logout()
    }
  },

  created() {
    this.$store.dispatch('restore');
  }
};
</script>
