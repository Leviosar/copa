<template>
  <v-modal v-model="value">
    <v-btn @click="googleAuth">
      <v-row>
        <v-icon>mdi-google</v-icon>
        <h2>Entrar com Google</h2>
      </v-row>
    </v-btn>
  </v-modal>  
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    }
  }
}
</script>