<template>
  <v-app id="inspire">
    <v-content>
        <v-container fluid fill-height align="center">        
          <v-card class="elevation-12 w-50">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                    <v-text-field
                      v-model="username"
                      prepend-icon="person"
                      name="login"
                      label="Login"
                      type="text"
                    ></v-text-field>
                    <v-text-field
                      v-model="password"
                      id="password"
                      prepend-icon="lock"
                      name="password"
                      label="Password"
                      type="password"
                    ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="handleLogin">Login</v-btn>
              </v-card-actions>
          </v-card>
        </v-container>
    </v-content>
  </v-app>
  </template>
  
<script>
  import { mapActions } from 'vuex';
  
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
    }
  };
  </script>