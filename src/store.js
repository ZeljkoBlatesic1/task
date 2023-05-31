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
    }
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
