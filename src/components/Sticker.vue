<template>
  <div class="sticker">
    <v-card class="pa-4" :style="{'border-color': border, 'border-width': '2px', 'border-style': 'solid'}" :color="sticker.status == 0 ? 'foreground' : 'secondary'">
      <v-row>
        <v-col cols="6" class="d-flex justify-center">
          <span :style="{'color': sticker.status == 0 ? theme.secondary : 'white' }"> {{ sticker.code }} </span>
        </v-col>
        <v-col cols="6" class="d-flex align-center justify-center">
          <v-row align="center" justify="end">
            <v-btn :style="{'color': sticker.status == 0 ? theme.secondary : 'white' }" icon @click="remove"><v-icon>mdi-minus</v-icon></v-btn>
            <div :style="{'color': sticker.status == 0 ? theme.secondary : 'white' }" class="pa-2"> {{ sticker.status }} </div>
            <v-btn :style="{'color': sticker.status == 0 ? theme.secondary : 'white' }" icon @click="add"><v-icon>mdi-plus</v-icon></v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
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
    },
    add() {
      this.$store.dispatch('addSticker', this.sticker);
    },
    remove() {
      this.$store.dispatch('removeSticker', this.sticker);
    },
  },
  computed: {
    theme(){
      return this.$vuetify.theme.themes[(this.$vuetify.theme.dark) ? 'dark' : 'light']
    },
    border() {
      return `${this.theme.secondary} !important`;
    }
  }
}
</script>