<template>
  <v-row class="sticker-list">
    <v-col cols="12" md="2" v-for="sticker in stickers" :key="sticker.code">
      <Sticker :sticker="sticker"/>
    </v-col>
  </v-row>
</template>

<script>
import Sticker from './Sticker.vue';

export default {
  components: {
    Sticker
  },
  props: {
    country: {
      type: Object,
      required: true
    }
  },
  computed: {
    stickers() {
      return this.$store.state.stickers.filter(sticker => sticker.country_id === this.country.id);
    }
  }
}
</script>