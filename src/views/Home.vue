<template>
  <div class="home">
    <v-container>
      <v-expansion-panels>
        <v-expansion-panel :style="{background: $vuetify.theme.themes[theme].foreground}" v-for="country in $store.state.country.data.en" :key="country.id">
          <v-expansion-panel-header>
            <v-row style="min-height: 70px" align="center" justify="space-around" justify-md="start">
              <v-col cols="1" style="padding: 0">
                <Flag :iso="country.iso"/>
              </v-col>
              <v-col cols="8" md="9">
                <h2>{{ country.name }}</h2>
              </v-col>
              <v-col cols="1" v-if="!mobile">
                <CountryProgress :country="country"/>
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <StickerList :country="country"/>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>

import StickerList from './../components/StickerList.vue'
import Flag from './../components/Flag.vue'
import CountryProgress from './../components/CountryProgress.vue'

export default {
  name: 'Home',
  components: {
    StickerList,
    Flag,
    CountryProgress
  },
  computed:{
    theme(){
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    },
    mobile() {
      return this.$vuetify.breakpoint.xsOnly
    }
  }
}
</script>
