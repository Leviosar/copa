<template>
  <v-container>
    <v-row class="top-progress" style="width: 100%; padding-left: 10px; padding-right: 10px" no-gutters>
      <v-col>
        <div class="d-block d-md-none">
          <v-card color="transparent" elevation="0">
            <v-progress-linear
              :value="value"
              height="30"
              color="secondary"
            >
              <span class="white--text">{{ value }} %</span>
            </v-progress-linear>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    value() {
      let stickers = this.$store.state.sticker.data;
      return ((stickers.filter(sticker => sticker.status > 0).length / stickers.length) * 100).toFixed(2);
    }
  }
}
</script>

<style>
</style>