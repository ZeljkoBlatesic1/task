<template>
  <v-card>
    <v-layout class="h-screen">
      <v-navigation-drawer
        class="bg-deep-purple"
        theme="dark"
        permanent
      >
        <v-list color="transparent">
          <v-list-item prepend-icon="mdi-view-dashboard" title="Left navbar"></v-list-item>
          <v-list-item prepend-icon="mdi-account-box" title="Account"></v-list-item>
          <v-list-item prepend-icon="mdi-gavel" title="Users list"></v-list-item>
          <div v-if="isAdminLoggedIn">
            <v-list-item prepend-icon="mdi-gavel" title="Add"></v-list-item>
            <v-list-item prepend-icon="mdi-gavel" title="Edit"></v-list-item>
            <v-list-item prepend-icon="mdi-gavel" title="Delete"></v-list-item>
          </div>
        </v-list>

        <template v-slot:append>
          <div class="pa-2">
            <v-btn block @click="logout">
              Logout
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
      <v-main style="height: 400px"></v-main>
    </v-layout>
  </v-card>
</template>

  

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'LeftNavbar',

  data () {
      return {
      }
  },
  methods: {
    ...mapActions(['logout'])
  },
  computed: {
  ...mapGetters(['isAdminLoggedIn'])
  },
}
</script>
