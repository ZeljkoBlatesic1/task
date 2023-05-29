<template>
  <v-app>
    <v-navigation-drawer app>
      <LeftNavbar/>
    </v-navigation-drawer>    
    <v-app-bar app>
        <TopNavbar/>
    </v-app-bar>
    <v-main>
        <h1 class="text-center">DASHBOARD</h1>
    </v-main>
    <v-footer app>
        <v-row justify="center">
            <v-col cols="12" class="text-center">
             <span>&copy; 2023 My App. All rights reserved.</span>
            </v-col>
        </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import LeftNavbar from './navbar/LeftNavbar.vue';
import TopNavbar from './navbar/TopNavbar.vue';

export default {
    name: "TheDashboard",
    components: { LeftNavbar, TopNavbar },
    data () {
      return {
      }
    },
}
</script>
