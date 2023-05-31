<template>
    <div v-if="loggedInUser">
      <v-app>
        <v-navigation-drawer app>
          <LeftNavbar/>
        </v-navigation-drawer>    
        <v-app-bar app>
          <TopNavbar/>
        </v-app-bar>
        <v-main>
          <h1 class="text-center my-8">DASHBOARD</h1>
          <div v-if="isAdminLoggedIn">
            <h2 class="text-center">Admin is logged in.</h2>
          </div>
          <div v-if="isViewLoggedIn">
            <h2 class="text-center">Viewer is logged in.</h2>
          </div>
        </v-main>
        <v-footer app>
            <v-row justify="center">
                <v-col cols="12" class="text-center">
                <span>&copy; 2023 My App. All rights reserved.</span>
                </v-col>
            </v-row>
        </v-footer>
      </v-app>
    </div>
    <div v-else>
      <LoginCard />
    </div>

</template>

<script>
import LeftNavbar from './navbar/LeftNavbar.vue';
import TopNavbar from './navbar/TopNavbar.vue';

import { mapState, mapActions, mapGetters } from 'vuex';
import LoginCard from './login/LoginCard.vue';

export default {
  name: "TheDashboard",
  components: { LeftNavbar, TopNavbar, LoginCard },
  data () {
    return {
    }
  },
  computed: {
  ...mapState(['loggedInUser']),
  ...mapGetters(['isAdminLoggedIn']),
  ...mapGetters(['isViewLoggedIn'])
  },
  methods: {
    ...mapActions(['logout'])
  },
}
</script>
