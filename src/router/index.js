import { createRouter, createWebHashHistory } from 'vue-router' // 导入 createWebHashHistory

const routes = [
  {
    path: '/',
    redirect: (to) => {
      return { path: '/index', query: { id: '7357954258957766656' } };
    }
  },
  {
    path: '/index/:id?',
    name: 'Home',
    component: () => import('../views/index.vue')
  },
  {
    path: '/graph/:id?',
    name: 'Graph',
    component: () => import('../views/graph.vue')
  },
  {
    path: '/eventGraph/:id?',
    name: 'EventGraph',
    component: () => import('../views/eventGraph.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(), 
  routes
})

export default router