<template>
  <aside class="sidecar d-none d-md-block">
    <v-card color="transparent" elevation="0">
      <v-progress-circular
        :size="120"
        :width="15"
        :value="value"
        color="primary"
      >
        {{ value }} %
      </v-progress-circular>
    </v-card>
  </aside>
</template>

<script>
export default {
  computed: {
    value() {
      let stickers = this.$store.state.stickers;
      return ((stickers.filter(sticker => sticker.status == 1).length / stickers.length) * 100).toFixed(2);
    }
  }
}
</script>

<style>
  .sidecar {
    position: fixed;
    right: 25px;
    top: 95px;
  }
</style>