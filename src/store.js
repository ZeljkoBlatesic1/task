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
      if (username === 'admin' && password === 'admin') {
        const user = {
          username: 'admin',
          role: 'admin'
        };
        commit('setLoggedInUser', user);
        // Store user information in local storage
        localStorage.setItem('loggedInUser', JSON.stringify(user));
      } else {
        // Handle incorrect credentials
        alert("Warning - Incorrect credentials!");
      }
    },
    logout({ commit }) {
      commit('clearLoggedInUser');
      // Remove user information from local storage
      localStorage.removeItem('loggedInUser');
    }
  },
  getters: {
    isAdminLoggedIn(state) {
      return state.loggedInUser && state.loggedInUser.role === 'admin';
    }
  }
});

export default store;
