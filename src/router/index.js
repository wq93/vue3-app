// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import AboutChild1 from '../views/AboutChild1.vue';
import AboutChild2 from '../views/AboutChild2.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    children: [
      {
        path: '',
        component: AboutChild1
      },
      {
        path: 'child1',
        component: AboutChild1
      },
      {
        path: 'child2',
        component: AboutChild2
      }
    ]
  },
];

const router = createRouter({
  // createWebHistory接受一个参数, 为所有路径添加一个前缀
  history: createWebHistory('/prefix'),
  routes,
});

export default router;
