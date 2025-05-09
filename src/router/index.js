import { createRouter, createWebHashHistory } from 'vue-router' // 导入 createWebHashHistory

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'Home',
    component: () => import('../views/index.vue')
  },
  {
    path: '/graph',
    name: 'Graph',
    component: () => import('../views/graph.vue')
  },
  {
    path: '/eventGraph',
    name: 'EventGraph',
    component: () => import('../views/eventGraph.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(), 
  routes
})

export default router