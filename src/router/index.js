import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue'
// MOCK
// import Dashboard from '../views/Dashboard.vue';
// import UserList from '../views/UserList.vue';
// import EditUser from '../views/EditUser.vue';
// import AddUser from '../views/AddUser.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
          path: '/',
          name: 'Dashboard',
          component: App
        },
    ]
  });

  export default router;