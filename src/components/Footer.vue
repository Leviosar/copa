<template>
  <v-footer
    dark
    padless
    color="primary"
  >
    <v-card
      flat
      tile
      class="primary white--text text-center"
      style="width: 100%"
    >
      <v-card-text>
        <v-btn
          v-for="network in social"
          :key="network.icon"
          class="mx-4 white--text"
          icon
          :href="network.url"
          target="_blank"
        >
          <v-icon size="24px">
            {{ network.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        O HEXA VEM!
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>João Vitor Maia</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      social: [
        {icon: 'mdi-github', url: 'https://github.com/leviosar'},
        {icon: 'mdi-twitter', url: 'https://twitter.com/jaovem'},
        {icon: 'mdi-linkedin', url: 'https://www.linkedin.com/in/joão-vitor-maia-36ab74133/'},
        {icon: 'mdi-instagram', url: 'https://www.instagram.com/jaovem/'},
      ]
    }),
  }
</script>