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
            <div>
              <h3 class="text-center mt-8">Roles</h3>  
              <ul class="text-center">
                <li v-for="role in roles" :key="role.id">{{ role.name }}</li>
              </ul>
              <h3 class="text-center mt-8">Users</h3>
              <ul class="text-center">
                <li v-for="user in users" :key="user.id">{{ user.username}}</li>
              </ul>
            </div>
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
  data() {
    return {};
  },
  computed: {
    ...mapState(['loggedInUser']),
    ...mapGetters(['isAdminLoggedIn', 'isViewLoggedIn']),
    roles() {
      return this.$store.state.roles.roles;
    },
    users() {
      return this.$store.state.users.users;
    },
  },
  methods: {
    ...mapActions(['logout']),
  },
  mounted() {
    this.$store.dispatch('getRoles')
      .catch((error) => {
        console.error('Error:', error);
      });
    this.$store.dispatch('getUsers')
      .then(()=>{
        console.log('Gojko', this.users)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  },
};
</script>
