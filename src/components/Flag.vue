<template>
  <v-row justify="center" align="center">
    <v-col class="d-flex flex-column justify-center align-center">
      <div :class="['flag', 'fi', `fi-${iso}`, 'flag-icon-squared']"/>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    iso: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
  .flag {
    border-radius: 4px;
    height: 36px !important;
    width: 48px !important;
    background-size: contain;
    background-position: 50%;
    background-repeat: no-repeat;
  }
</style>