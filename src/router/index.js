import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Movement from '../components/Movement.vue';

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Home,
  },
  {
    path: '/movement',
    name: 'MovementComponent',
    component: Movement,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;