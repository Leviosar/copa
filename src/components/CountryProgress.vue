<template>
  <v-progress-linear
    :value="value"
    height="30"
    color="secondary"
    class="pr-10"
  >
    <span class="white--text">{{ value }} %</span>
  </v-progress-linear>
</template>

<script>
export default {
  props: {
    country: {
      type: Object,
      required: true,
    }
  },
  computed: {
    value() {
      const total = this.$store.state.sticker.data.filter(s => s.country_id == this.country.id).length
      const owned = this.$store.state.sticker.data.filter(s => s.country_id == this.country.id && s.status > 0).length
      
      return (owned / total * 100).toFixed(2)
    }
  }
}
</script>