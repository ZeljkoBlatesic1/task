<template>
  <v-app id="inspire">
    
        <v-container fluid fill-height align="center">        
          <v-card class="elevation-12 w-50">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                    <v-text-field
                      v-model="username"
                      name="login"
                      label="Login"
                      type="text"
                      @keyup.enter="handleLogin"
                    ></v-text-field>
                    <v-text-field
                      v-model="password"
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                      @keyup.enter="handleLogin"
                    ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="handleLogin">Login</v-btn>
              </v-card-actions>
          </v-card>
        </v-container>
    
  </v-app>
  </template>
  
<script>
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      ...mapActions(['login']),
      handleLogin() {
        this.login({ username: this.username, password: this.password });
      }
    },
    computed: {
      ...mapGetters(['isAdminLoggedIn'])
    }
  };
  </script>