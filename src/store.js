import { createStore } from 'vuex';

const store = createStore({
  state: {
    loggedInUser: null
  },
  mutations: {
    setLoggedInUser(state, user) {
      state.loggedInUser = user;
    },
    clearLoggedInUser(state) {
      state.loggedInUser = null;
    }
  },
  actions: {
    login({ commit }, { username, password }) {
      // Hard-coded username and password check
      if (username === 'admin' && password === 'password') {
        const user = {
          username: 'admin',
          role: 'admin'
        };
        commit('setLoggedInUser', user);
        // Store user information in local storage
        localStorage.setItem('loggedInUser', JSON.stringify(user));
      } else {
        // Handle incorrect credentials
      }
    },
    logout({ commit }) {
      commit('clearLoggedInUser');
      // Remove user information from local storage
      localStorage.removeItem('loggedInUser');
    }
  }
});

export default store;
