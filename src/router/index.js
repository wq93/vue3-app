// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import AboutChild1 from '../views/AboutChild1.vue';
import AboutChild2 from '../views/AboutChild2.vue';
import AboutChild3 from '../views/AboutChild3.vue';
import NotFound from '../views/NotFound.vue';
import Login from '../views/Login.vue';

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
      },
      {
        path: 'child3/:id',
        component: AboutChild3
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
];

const router = createRouter({
  // createWebHistory接受一个参数, 为所有路径添加一个前缀
  history: createWebHistory('/prefix'),
  routes,
});

const isLogin = true;
// 全局的导航守卫 -> 路由独享的导航守卫 -> 组件内的导航守卫 -> beforeResolve -> afterEach
// to 跳转到的那个页面 from 触发跳转的页面
router.beforeEach((to, from) => {
  // 默认返回 undefined 和 return true 是一样的 都会发生跳转
  // 不会跳转 return false / return {}
  if (!isLogin && to.path !== "/login") {
    return {
      path: "/login",
    };
  }
  // console.log("router.beforeEach", to, from);
});

router.afterEach((to, from, failure) => {
  if (!failure) {
    document.title = to.meta.title || "vue3真好玩";
  } else {
    console.log("router.afterEach", failure);
  }
});

export default router;
