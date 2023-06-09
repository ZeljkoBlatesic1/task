import { createStore } from 'vuex';
import apiClient from '../src/services/api.js'

const store = createStore({
  state: {
    loggedInUser: null,
    //roles: [],
    users: [] 
  },
  mutations: {
    setLoggedInUser(state, user) {
      state.loggedInUser = user;
    },
    clearLoggedInUser(state) {
      state.loggedInUser = null;
    },
    SET_ROLES(state, roles) {
      state.roles = roles;
    },
    SET_USERS(state, users) {
      state.users = users;
    },
  },
  actions: {
    login({ commit }, { username, password }) {
      if (username === 'admin' && password === 'admin') {
        const user = {
          username: 'admin',
          role: 'admin'
        };
        commit('setLoggedInUser', user);
        localStorage.setItem('loggedInUser', JSON.stringify(user));
      } else if(username === 'view' && password === 'view'){
        const user = {
          username: 'view',
          role: 'view'
        };
        commit('setLoggedInUser', user);
        localStorage.setItem('loggedInUser', JSON.stringify(user));
      } else {
        alert("Warning - Incorrect credentials!");
      }
    },
    logout({ commit }) {
      commit('clearLoggedInUser');
      localStorage.removeItem('loggedInUser');
    },
    async getRoles({ commit }) {
      try {
        const response = await apiClient.get('/roles');
        // Handle the response and update the store as needed
        //console.log('Roles:', response.data);
        commit('SET_ROLES', response.data);
      } catch (error) {
        // Handle the error
        console.error('Error:', error);
      }
    },
    async getUsers({ commit }) {
      try {
        const response = await apiClient.get('/users');
        // Handle the response and update the store as needed
        //console.log('Roles:', response.data);
        commit('SET_USERS', response.data);
      } catch (error) {
        // Handle the error
        console.error('Error:', error);
      }
    },
  },
  getters: {
    isAdminLoggedIn(state) {
      return state.loggedInUser && state.loggedInUser.role === 'admin';
    },
    isViewLoggedIn(state) {
      return state.loggedInUser && state.loggedInUser.role === 'view';
    }
  }
});

export default store;
