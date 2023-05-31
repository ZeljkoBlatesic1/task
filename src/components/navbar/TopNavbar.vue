<template>
      <v-toolbar-title>Top navbar</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text>Link 1</v-btn>
      <v-btn text @click="logout">Logout</v-btn>
</template>
  

<script>
import { mapActions } from 'vuex';
export default {
  name: 'TopNavbar',

  data () {
      return {
      }
  },
  methods: {
    ...mapActions(['logout'])
  }
}
</script>