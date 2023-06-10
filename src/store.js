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
    resetUserForm(state) {
      state.userForm = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        role_id: null,
      };
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
        commit('SET_ROLES', response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    },
    async getUsers({ commit }) {
      try {
        const response = await apiClient.get('/users');
        commit('SET_USERS', response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    },
    async createUser({ commit, dispatch }, userData) {
      try {
        const url = '/users/create/';
        const response = await apiClient.post(url, userData);
    
        console.log('User created successfully:', response.data);
    
        commit('resetUserForm');
    
        dispatch('getUsers');
      } catch (error) {
        console.error('Error creating user:', error.response.data);
        console.log('Podaci', userData)
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
