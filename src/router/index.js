import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/signin',
  },
  {
    path: '/signin',
    component: () => import('../views/Signin.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/backend/Products.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/backend/Orders.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/backend/Coupons.vue'),
      },
      {
        path: 'storages',
        component: () => import('../views/backend/Storages.vue'),
      },
    ],
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes,
});

export default router;
