<template>
  <v-app>
    <v-main>
      <TheDashboard/>
    </v-main>
  </v-app>
</template>

<script>
import TheDashboard from './components/TheDashboard.vue'

export default {
  name: 'App',

  components: {
    TheDashboard,
  },

  data: () => ({
    //
  }),
}
</script>
