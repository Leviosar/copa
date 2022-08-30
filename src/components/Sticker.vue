<template>
  <div class="sticker">
    <v-btn @click="toggle" block color="secondary" :outlined="sticker.status == 0"> {{ sticker.code }} </v-btn>
  </div>  
</template>

<script>
export default {
  props: {
    sticker: {
      type: Object,
      required: true
    }
  },
  methods: {
    toggle() {
      this.$store.dispatch('toggleSticker', this.sticker);
    }
  }
}
</script>