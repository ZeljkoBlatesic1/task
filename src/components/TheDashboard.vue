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
            <v-row>
              <v-col>
                <h3 class="text-center mt-8">Roles</h3>
                <v-list dense>  
                  <ul class="text-center list-item">
                    <li v-for="role in roles" :key="role.id">{{ role.name }}</li>
                  </ul>
                </v-list>
              </v-col>
              <v-col>
                <h3 class="text-center mt-8">Users</h3>
                <v-list dense> 
                  <ul class="text-center list-item">
                    <li v-for="user in users" :key="user.id">{{ user.username}}</li>
                  </ul>
                </v-list>
              </v-col>
            </v-row>      
            <div class="text-center my-8 rounded-pill">
              <v-btn
                class="text-none ms-4 text-white"
                color="blue-darken-4"
                rounded="0"
                variant="flat"
                @click="showCreateForm = !showCreateForm"
              >
              Create user form
              </v-btn>
              <div v-if="showCreateForm">
                <form @submit.prevent="createUser(userForm)" name="createForm">
                  <!-- <div>
                    <label for="id">Id:</label>
                    <input type="number" v-model="userForm.id" required>
                  </div> -->
                  <div>
                    <label for="first_name">First Name:</label>
                    <input type="text" v-model="userForm.first_name" required>
                  </div>
                  <div>
                    <label for="last_name">Last Name:</label>
                    <input type="text" v-model="userForm.last_name" required>
                  </div>
                  <div>
                    <label for="email">Email:</label>
                    <input type="email" v-model="userForm.email" required>
                  </div>
                  <div>
                    <label for="password">Password:</label>
                    <input type="password" v-model="userForm.password" required>
                  </div>
                  <div>
                    <label for="role_Id">Role ID:</label>
                    <input type="number" v-model="userForm.role_id" required>
                  </div>
                  <button type="submit">Create</button>
                </form>
              </div>
            </div>
          </div>
          <div v-if="isViewLoggedIn">
            <h2 class="text-center">Viewer is logged in.</h2>
            <h3 class="text-center mt-8">Users</h3>
            <ul class="text-center">
              <li v-for="user in users" :key="user.id">{{ user.username}}</li>
            </ul>
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

<style>
.list-item {
  list-style-type: none;
}
</style>

<script>
import LeftNavbar from './navbar/LeftNavbar.vue';
import TopNavbar from './navbar/TopNavbar.vue';
import { mapState, mapActions, mapGetters } from 'vuex';
import LoginCard from './login/LoginCard.vue';

export default {
  name: "TheDashboard",
  components: { LeftNavbar, TopNavbar, LoginCard },
  data() {
    return {
      showCreateForm: false,
      userForm: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        role_id: null,
      },
    };
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
    ...mapActions(['logout', 'createUser']),
  },
  mounted() {
    this.$store.dispatch('getRoles')
      .catch((error) => {
        console.error('Error:', error);
      });
    this.$store.dispatch('getUsers')
      .catch((error) => {
        console.error('Error:', error);
      });
  },
};
</script>
